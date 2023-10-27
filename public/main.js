// main.ts
import { OmniSDKClient, OmniSDKClientEvents, OmniSDKHostMessages } from "omni-sdk";
var sdk = new OmniSDKClient("omni-extension-logging").init({
  subscriptions: [OmniSDKHostMessages.CUSTOM_EVENT]
});
sdk.events.on(OmniSDKClientEvents.CUSTOM_EVENT, (event) => {
  if (event.eventId === "log") {
    console.log("omni-extension-logging", JSON.stringify(event.eventArgs.message));
  }
});
