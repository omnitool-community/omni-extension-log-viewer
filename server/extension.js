// extension.ts
import { OmniSSEMessages } from "omni-shared";
var EXTENSION_ID = "omni-extension-logging";
var extension_hooks = {
  "pre_request_execute": async function(ctx, exec_ctx, api, details) {
    if (exec_ctx.sessionId) {
      const message = {
        type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
        body: {
          extensionId: EXTENSION_ID,
          eventId: "log",
          eventArgs: {
            message: `Executing ${api} with details: ${JSON.stringify(details, null, 2)} ${JSON.stringify(exec_ctx, null, 2)}`,
            options: {
              type: "info"
            }
          }
        }
      };
      ctx.app.debug(">>>>>>>>>>>>>>>>>>pre_request_execute<<<<<<<<<<<<<<<<<<", exec_ctx.sessionId, JSON.stringify(message, null, 2));
      const messagingService = ctx.app.services.get("messaging");
      await messagingService.send(exec_ctx.sessionId, message);
    }
  },
  "post_request_execute": async function(ctx, exec_ctx, api, details) {
    if (exec_ctx.sessionId) {
      const message = {
        type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
        body: {
          extensionId: EXTENSION_ID,
          eventId: "log",
          eventArgs: {
            message: `Executed ${api} with details: ${JSON.stringify(details, null, 2)} ${JSON.stringify(exec_ctx, null, 2)}`,
            options: {
              type: "info"
            }
          }
        }
      };
      ctx.app.debug(">>>>>>>>>>>>>>>>>>post_request_execute<<<<<<<<<<<<<<<<<<", exec_ctx.sessionId, JSON.stringify(message, null, 2));
      const messagingService = ctx.app.services.get("messaging");
      await messagingService.send(exec_ctx.sessionId, message);
    }
  }
};
var extension_default = {
  extensionHooks: extension_hooks,
  init: (ctx) => {
    ctx.app.info("Omni Debugger Extension loaded");
  }
};
export {
  extension_default as default
};
