import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  ngLet: T;
}

@Directive({
    selector: '[ngLet]',
})
export class NgLetDirective<T> implements OnChanges {
    @Input('ngLet') value: T;

    constructor(
      private readonly templateRef: TemplateRef<LetContext<T>>,
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
