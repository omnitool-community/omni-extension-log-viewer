import { truncate } from 'fs';
import { OmniSSEMessages } from 'omni-shared'

const EXTENSION_ID = 'omni-extension-log-viewer'

enum LogType {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

interface ILog {
  sessionId: string;
  timestamp: number;
  jobId?: string;
  type: LogType;
  message: string;
  details: any;
}

const LOG_EXPIRE_IN_MS = 1000 * 60 * 60 * 2 // 2 hours
const MAX_LENGTH = 300

function saveLog(ctx: any, log: ILog) {
  if (ctx.app.kvStorage) {
    ctx.app.kvStorage.set(`log:${log.sessionId}.${log.timestamp}`, log, Date.now() + LOG_EXPIRE_IN_MS)
  }
}

async function sendLogMessage(ctx: any, log: ILog) {
  const messagingService = ctx.app.services.get('messaging')
  await messagingService.send(log.sessionId, {
    type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
    body: {
      extensionId: EXTENSION_ID,
      eventId: 'log',
      eventArgs: log
    }
  })
}

function truncateJSON(json: any) {
  let truncated: any = Array.isArray(json) ? [] : {}; // Initialize as array or object based on input

  for (const key in json) {
    if (Object.prototype.hasOwnProperty.call(json, key)) {
      if (typeof json[key] === 'object') {
        truncated[key] = truncateJSON(json[key]); // Recursively truncate
      } else if (typeof json[key] === 'string') {
        truncated[key] = json[key].length > MAX_LENGTH ? json[key].substring(0, MAX_LENGTH) + '...' : json[key];
      } else {
        truncated[key] = json[key]; // Copy other types as is
      }
    }
  }

  return truncated;
}

const extension_hooks = {
  'pre_request_execute': async function(ctx: any, exec_ctx: any, api: string, details: any) {
    if (exec_ctx.sessionId) {
      const log: ILog = {
        sessionId: exec_ctx.sessionId,
        timestamp: new Date().getTime(),
        jobId: exec_ctx.jobId,
        type: LogType.INFO,
        message: `Executing ${api}`,
        details: truncateJSON(details),
      }

      saveLog(ctx, log)
      sendLogMessage(ctx, log)
    }
  },
  'post_request_execute': async function(ctx: any, exec_ctx: any, api: string, details: any) {
    if (exec_ctx.sessionId) {
      const log: ILog = {
        sessionId: exec_ctx.sessionId,
        timestamp: new Date().getTime(),
        jobId: exec_ctx.jobId,
        type: details.result?.error ? LogType.ERROR : LogType.INFO,
        message: `Result received from ${api}`,
        details: truncateJSON(details),
      }
      saveLog(ctx, log)
      sendLogMessage(ctx, log)
    }
  }
}

export default {
  extensionHooks: extension_hooks,
}