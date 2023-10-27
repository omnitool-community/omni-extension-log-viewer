// extension.ts
var extension_hooks = {
  "pre_request_execute": function(ctx, api, request) {
    ctx.app.debug("pre_request_execute", api, JSON.stringify(request, null, 2));
  }
};
var extension_default = {
  hooks: extension_hooks,
  init: (ctx) => {
    ctx.app.info("Omni Debugger Extension loaded");
  }
};
export {
  extension_default as default
};
