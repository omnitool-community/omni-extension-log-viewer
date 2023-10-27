//import './css/bootstrap-icons_font_bootstrap-icons.css'
import { OmniSDKClient, OmniSDKClientEvents, OmniSDKHostMessages } from 'omni-sdk';

const sdk = new OmniSDKClient("omni-extension-logging").init({
    subscriptions: [OmniSDKHostMessages.CUSTOM_EVENT]
});

sdk.events.on(OmniSDKClientEvents.CUSTOM_EVENT,  (event: any) =>
{
    if(event.eventId === "log")
    {
        console.log("omni-extension-logging", JSON.stringify(event.eventArgs.message));
    }
})