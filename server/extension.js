// extension.ts
import { OmniSSEMessages } from "omni-shared";
var EXTENSION_ID = "omni-extension-logging";
var status = "closed";
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
            type: "info",
            message: `Executing ${api}`,
            details
          }
        }
      };
      const messagingService = ctx.app.services.get("messaging");
      if (status === "closed") {
        status = "open";
        await messagingService.send(exec_ctx.sessionId, {
          type: OmniSSEMessages.SHOW_EXTENSION,
          body: {
            extensionId: EXTENSION_ID,
            page: "index.html"
          }
        });
      }
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
            timestamp: (/* @__PURE__ */ new Date()).getTime(),
            type: "info",
            message: `Received result from ${api}`,
            details
          }
        }
      };
      const messagingService = ctx.app.services.get("messaging");
      if (status === "closed") {
        status = "open";
        await messagingService.send(exec_ctx.sessionId, {
          type: OmniSSEMessages.SHOW_EXTENSION,
          body: {
            extensionId: EXTENSION_ID,
            page: "index.html"
          }
        });
      }
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
