import { Injector, Renderer2, RendererFactory2 } from "@angular/core";

import { IGlobalEvent } from "../models";
import { GLOBAL_HOST } from "../consts";

export function initializeListeners(injector: Injector, events: IGlobalEvent[], classRef: any): Function[] {
    const rendererFactory2: RendererFactory2 = injector.get(RendererFactory2);
    const renderer2: Renderer2 = rendererFactory2.createRenderer(null, null);

    const listeners: Function[] = [];
    events.forEach((event: IGlobalEvent): void => {
        listeners.push(renderer2.listen(GLOBAL_HOST, event.type, payload => {
            classRef[event.action](payload);
        }));
    });

    return listeners;
}