//import './css/bootstrap-icons_font_bootstrap-icons.css'
import { OmniSDKClient, OmniSDKClientEvents, OmniSDKHostMessages } from 'omni-sdk';
import Alpine from 'alpinejs';
import JSONFormatter from 'json-formatter-js'

const sdk = new OmniSDKClient("omni-extension-log-viewer").init({
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
        showBanner: true,
        init() {
            sdk.events.on(OmniSDKClientEvents.CUSTOM_EVENT,  (event: any) =>
            {
                if(event.eventId === "log")
                {
                    this.showBanner = false;
                    this.logs.unshift({ type: event.eventArgs.type, timestamp: new Date(event.eventArgs.timestamp).toISOString(), message: event.eventArgs.message, details: event.eventArgs.details });
                }
            })
        }
    }));
});

Alpine.directive('json', (el, { expression }, { evaluateLater, effect }) => {
    const renderLog = evaluateLater(expression);

    effect(() => {
        renderLog((log: any) => {
            console.log(JSON.stringify(log));
            el.innerHTML = ''; // Clear previous content
            const formatter = new JSONFormatter(log);
            el.appendChild(formatter.render());
        })
    })
});



Alpine.start();

export default {};
