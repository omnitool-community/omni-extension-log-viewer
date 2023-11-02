//import './css/bootstrap-icons_font_bootstrap-icons.css'
import { OmniSDKClient, OmniSDKClientEvents, OmniSDKHostMessages } from 'omni-sdk';
import Alpine from 'alpinejs';

const sdk = new OmniSDKClient("omni-extension-logging").init({
    subscriptions: [OmniSDKHostMessages.CUSTOM_EVENT]
});

declare global {
    interface Window {
      Alpine: typeof Alpine
    }
}

window.Alpine = Alpine
document.addEventListener('alpine:init', async () => {
    Alpine.data('extLogs', () => ({
        logs: [],
        init() {
            sdk.events.on(OmniSDKClientEvents.CUSTOM_EVENT,  (event: any) =>
            {
                if(event.eventId === "log")
                {
                    console.log("omni-extension-logging", JSON.stringify(event.eventArgs));
                    this.logs.push({ type: event.eventArgs.type, timestamp: new Date(event.eventArgs.timestamp).toISOString(), message: event.eventArgs.message, details: event.eventArgs.details });
                }
            })
        }
    }));
});


Alpine.start();

export default {};
