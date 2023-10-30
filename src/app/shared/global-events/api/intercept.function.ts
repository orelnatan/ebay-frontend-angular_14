import { GlobalEventsModule } from "../global-events.module";
import { GLOBAL_HOST } from "../consts";

export function intercept(type: string, callback: Function): Function {
  return GlobalEventsModule.renderer2.listen(GLOBAL_HOST, type, event => {
    callback(event);  
  })
}
