//import './css/bootstrap-icons_font_bootstrap-icons.css'
import { OmniSDKClient, OmniSDKClientEvents } from 'omni-sdk';

const sdk = new OmniSDKClient("omni-extension-logging").init();
sdk.events.on(OmniSDKClientEvents.CUSTOM_EVENT,  (event: any) =>
{
    if(event.eventId === "log")
    {
        console.log(JSON.stringify(event.eventArgs.message));
    }
})