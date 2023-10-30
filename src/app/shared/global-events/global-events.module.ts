import { NgModule, Provider, Renderer2, RendererFactory2 } from '@angular/core';

const argsProvider: Provider = {
  provide: 'args', useValue: null 
};

@NgModule({
  providers: [
    argsProvider
  ]
})
export class GlobalEventsModule {
  static renderer2: Renderer2;

  constructor(
    private readonly rendererFactory: RendererFactory2
  ) { 
    GlobalEventsModule.renderer2 = this.rendererFactory.createRenderer(null, null);
  }
}