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
        isOpen(element) {
            // Check if the next sibling's display property is not 'none'
            return element.nextElementSibling.style.display !== 'none';
        },
        toggle(event) {
        },
        init() {
            sdk.events.on(OmniSDKClientEvents.CUSTOM_EVENT,  (event: any) =>
            {
                if(event.eventId === "log")
                {
                    this.logs.push({ type: event.eventArgs.type, timestamp: new Date(event.eventArgs.timestamp).toISOString(), message: event.eventArgs.message, details: event.eventArgs.details });
                }
            })
        }
    }));
});

Alpine.directive('json', (el, { expression }, { evaluate }) => {
    const jsonData = evaluate(expression);
    console.log(jsonData)
    const formatter = new JSONFormatter(jsonData);
    el.appendChild(formatter.render());
});



Alpine.start();

export default {};
