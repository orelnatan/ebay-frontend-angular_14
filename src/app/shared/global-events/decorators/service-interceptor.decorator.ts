import { Injector, inject, Inject, TypeProvider, Injectable } from "@angular/core";

import { initializeDependencies, initializeListeners } from "../utils";
import { IGlobalEvent, providedIn } from "../models";

export function ServiceInterceptor<T>(events: IGlobalEvent[] = [], deps: TypeProvider[] = [], providedIn: providedIn = null):
  <U extends T & (new (...args: any[]) => {})>(constructor: U) => U {
  return function<U extends T & { new(...args: any[]): {} }>(orgConstructor: U): U {
    
    @Injectable({ 
      providedIn: providedIn
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
    orgConstructor.prototype.ngOnDestroy = function (): void {
      this.listeners.map(
        (listener: Function) => listener());
         
      onDestroy && onDestroy.call(this);
    };

    return Interceptor;
  }
}

  