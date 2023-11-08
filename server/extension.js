// extension.ts
import { OmniSSEMessages } from "omni-shared";
var EXTENSION_ID = "omni-extension-log-viewer";
var extension_hooks = {
  "pre_request_execute": async function(ctx, exec_ctx, api, details) {
    if (exec_ctx.sessionId) {
      const message = {
        type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
        body: {
          extensionId: EXTENSION_ID,
          eventId: "log",
          eventArgs: {
            timestamp: (/* @__PURE__ */ new Date()).getTime(),
            type: "info" /* INFO */,
            message: `Executing ${api}`,
            details
          }
        }
      };
      const messagingService = ctx.app.services.get("messaging");
      await messagingService.send(exec_ctx.sessionId, message);
    }
  },
  "post_request_execute": async function(ctx, exec_ctx, api, details) {
    if (exec_ctx.sessionId) {
      const logType = details.result?.error ? "error" /* ERROR */ : "info" /* INFO */;
      const message = {
        type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
        body: {
          extensionId: EXTENSION_ID,
          eventId: "log",
          eventArgs: {
            timestamp: (/* @__PURE__ */ new Date()).getTime(),
            type: logType,
            message: `Received result from ${api}`,
            details
          }
        }
      };
      const messagingService = ctx.app.services.get("messaging");
      await messagingService.send(exec_ctx.sessionId, message);
    }
  }
};
var extension_default = {
  extensionHooks: extension_hooks
};
export {
  extension_default as default
};
