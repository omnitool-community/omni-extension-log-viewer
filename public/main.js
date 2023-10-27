// main.ts
import { OmniSDKClient, OmniSDKClientEvents } from "omni-sdk";
var sdk = new OmniSDKClient("omni-extension-logging").init();
sdk.events.on(OmniSDKClientEvents.CUSTOM_EVENT, (event) => {
  if (event.eventId === "log") {
    console.log(JSON.stringify(event.eventArgs.message));
  }
});
