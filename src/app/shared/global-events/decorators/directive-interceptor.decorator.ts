import { Injector, inject, Inject, TypeProvider, Directive } from "@angular/core";

import { createSourceClone, initializeDependencies, initializeListeners } from "../utils";
import { IGlobalEvent } from "../models";

export function DirectiveInterceptor<T>(events: IGlobalEvent[] = [], deps: TypeProvider[] = []):
  <U extends T & (new (...args: any[]) => {})>(constructor: U) => U {
  return function<U extends T & { new(...args: any[]): {} }>(orgConstructor: U): U {
    
    @Directive({ 
      selector: '[]'
    })
    class Interceptor extends orgConstructor {
      listeners: Function[] = [];
      
      constructor(@Inject('args') ...args: any[]) {
        const injector: Injector = inject(Injector);

        super(...initializeDependencies(injector, deps));
      
        this.listeners = initializeListeners(injector, events, this);
      }
    }
    
    const onDestroy: Function = orgConstructor.prototype.ngOnDestroy;
    orgConstructor.prototype.ngOnDestroy = function(): void {
      this.listeners.map(
        (listener: Function) => listener());

      onDestroy && onDestroy.call(this);
    };

    const ɵdirType: unknown = Interceptor.prototype.constructor.ɵdir.type;
    Interceptor.prototype.constructor.ɵdir = { 
      ... createSourceClone(orgConstructor.prototype.constructor.ɵdir, ["type"]),
      type: ɵdirType,
    }

    return Interceptor;
  }
}

  