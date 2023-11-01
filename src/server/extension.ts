import { OmniSSEMessages } from 'omni-shared'

const EXTENSION_ID = 'omni-extension-logging'

let status = 'closed'

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
            type: 'info',
            message: `Executing ${api}`,
          }
        }
      }
      const messagingService = ctx.app.services.get('messaging')
      if (status === 'closed') {
        status = 'open'
        await messagingService.send(exec_ctx.sessionId, {
          type: OmniSSEMessages.SHOW_EXTENSION,
          body: {
            extensionId: EXTENSION_ID,
            page: 'index.html'
          }
        })
      }
      await messagingService.send(exec_ctx.sessionId, message)
    }
  },
  'post_request_execute': async function(ctx: any, exec_ctx: any, api: string, details: any) {
    if (exec_ctx.sessionId) {
      const message = {
        type: OmniSSEMessages.CUSTOM_EXTENSION_EVENT,
        body: {
          extensionId: EXTENSION_ID,
          eventId: 'log',
          eventArgs: {
            timestamp: new Date().getTime(),
            type: 'info',
            message: `Received result from ${api}`,
          }
        }
      }
      const messagingService = ctx.app.services.get('messaging')
      if (status === 'closed') {
        status = 'open'
        await messagingService.send(exec_ctx.sessionId, {
          type: OmniSSEMessages.SHOW_EXTENSION,
          body: {
            extensionId: EXTENSION_ID,
            page: 'index.html'
          }
        })
      }
      await messagingService.send(exec_ctx.sessionId, message)
    }
  }
}

export default {
  extensionHooks: extension_hooks,
  init: (ctx: any) => {
    ctx.app.info('Omni Debugger Extension loaded')
  }
}