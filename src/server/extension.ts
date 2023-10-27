import { IMessage } from 'omni-shared'

interface IOmniSSEMessageDebuggerLog extends IMessage {
  type: 'omni-extension-debugger:log';
  body: {
    message: string;
    options: {
      type?: 'info' | 'success' | 'warning' | 'error';
    }
  }
}

const extension_hooks = {
  'pre_request_execute': function(ctx: any, api: string, request: any) {
    ctx.app.debug('>>>>>>>>>>>>>>>>>>pre_request_execute<<<<<<<<<<<<<<<<<<', api, JSON.stringify(request, null, 2))
  }
}

export default {
  extensionHooks: extension_hooks,
  init: (ctx: any) => {
    ctx.app.info('Omni Debugger Extension loaded')
  }
}