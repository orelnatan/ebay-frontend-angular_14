import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ngLet]',
})
export class NgLetDirective<T> implements OnChanges {
    @Input('ngLet') value: T;

    constructor(
      private readonly templateRef: TemplateRef<unknown>,
      private readonly viewContainerRef: ViewContainerRef,
    ) {}

    ngOnChanges(): void {
      this.viewContainerRef.clear();
      
      if(this.value != null && this.value != undefined) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {
          ngLet: this.value,
        });
      }
    }
}
