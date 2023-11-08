import { OmniSSEMessages } from 'omni-shared'

const EXTENSION_ID = 'omni-extension-log-viewer'

enum LogType {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

const extension_hooks = {
  'pre_request_execute': async function(ctx: any, exec_ctx: any, api: string, details: any) {
    if (exec_ctx.sessionId) {
      const message = {
        type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
        body: {
          extensionId: EXTENSION_ID,
          eventId: 'log',
          eventArgs: {
            timestamp: new Date().getTime(),
            type: LogType.INFO,
            message: `Executing ${api}`,
            details,
          }
        }
      }
      const messagingService = ctx.app.services.get('messaging')
      await messagingService.send(exec_ctx.sessionId, message)
    }
  },
  'post_request_execute': async function(ctx: any, exec_ctx: any, api: string, details: any) {
    if (exec_ctx.sessionId) {
      const logType = details.result?.error ? LogType.ERROR : LogType.INFO
      const message = {
        type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
        body: {
          extensionId: EXTENSION_ID,
          eventId: 'log',
          eventArgs: {
            timestamp: new Date().getTime(),
            type: logType,
            message: `Received result from ${api}`,
            details,
          }
        }
      }
      const messagingService = ctx.app.services.get('messaging')
      // if (logType === LogType.ERROR) {
      //   await messagingService.send(exec_ctx.sessionId, {
      //     type: OmniSSEMessages.SHOW_EXTENSION,
      //     body: {
      //       extensionId: EXTENSION_ID,
      //       page: 'index.html'
      //     }
      //   })
      // }
      await messagingService.send(exec_ctx.sessionId, message)
    }
  }
}

export default {
  extensionHooks: extension_hooks,
}