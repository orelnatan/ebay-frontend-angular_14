import { Injector, inject, Inject, TypeProvider, Pipe, ɵPipeDef } from "@angular/core";

import { createSourceClone, initializeDependencies, initializeListeners } from "../utils";
import { IGlobalEvent } from "../models";

export function PipeInterceptor<T>(events: IGlobalEvent[] = [], deps: TypeProvider[] = []):
  <U extends T & (new (...args: any[]) => {})>(constructor: U) => U {
  return function<U extends T & { new(...args: any[]): {} }>(orgConstructor: U): U {
    
    @Pipe({ 
      name: ''
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
      
    const def: ɵPipeDef<T> = orgConstructor.prototype.constructor.ɵpipe;
    def.onDestroy = function (this: any): void {
      this.listeners.map(
        (listener: Function) => listener());
      
      this.ngOnDestroy && this.ngOnDestroy.call(this);
    };
  
    const ɵpipeType: unknown = Interceptor.prototype.constructor.ɵpipe.type;
    Interceptor.prototype.constructor.ɵpipe = { 
      ... createSourceClone(orgConstructor.prototype.constructor.ɵpipe, ["type"]),
      type: ɵpipeType,
    }

    return Interceptor;
  }
}