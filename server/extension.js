// extension.ts
import { OmniSSEMessages } from "omni-shared";
var EXTENSION_ID = "omni-extension-log-viewer";
var LOG_EXPIRE_IN_MS = 1e3 * 60 * 60 * 2;
var MAX_LENGTH = 300;
function saveLog(ctx, log) {
  if (ctx.app.kvStorage) {
    ctx.app.kvStorage.set(`log:${log.sessionId}.${log.timestamp}`, log, Date.now() + LOG_EXPIRE_IN_MS);
  }
}
async function sendLogMessage(ctx, log) {
  const messagingService = ctx.app.services.get("messaging");
  await messagingService.send(log.sessionId, {
    type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
    body: {
      extensionId: EXTENSION_ID,
      eventId: "log",
      eventArgs: log
    }
  });
}
function truncateJSON(json) {
  let truncated = Array.isArray(json) ? [] : {};
  for (const key in json) {
    if (Object.prototype.hasOwnProperty.call(json, key)) {
      if (typeof json[key] === "object") {
        truncated[key] = truncateJSON(json[key]);
      } else if (typeof json[key] === "string") {
        truncated[key] = json[key].length > MAX_LENGTH ? json[key].substring(0, MAX_LENGTH) + "..." : json[key];
      } else {
        truncated[key] = json[key];
      }
    }
  }
  return truncated;
}
var extension_hooks = {
  "pre_request_execute": async function(ctx, exec_ctx, api, details) {
    if (exec_ctx.sessionId) {
      const log = {
        sessionId: exec_ctx.sessionId,
        timestamp: (/* @__PURE__ */ new Date()).getTime(),
        jobId: exec_ctx.jobId,
        type: "info" /* INFO */,
        message: `Executing ${api}`,
        details: truncateJSON(details)
      };
      saveLog(ctx, log);
      sendLogMessage(ctx, log);
    }
  },
  "post_request_execute": async function(ctx, exec_ctx, api, details) {
    if (exec_ctx.sessionId) {
      const log = {
        sessionId: exec_ctx.sessionId,
        timestamp: (/* @__PURE__ */ new Date()).getTime(),
        jobId: exec_ctx.jobId,
        type: details.result?.error ? "error" /* ERROR */ : "info" /* INFO */,
        message: `Result received from ${api}`,
        details: truncateJSON(details)
      };
      saveLog(ctx, log);
      sendLogMessage(ctx, log);
    }
  }
};
var extension_default = {
  extensionHooks: extension_hooks
};
export {
  extension_default as default
};
