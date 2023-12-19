import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { BreakpointType } from '@ebay/shared/models';

@UntilDestroy()
@Directive({ selector: '[breakpointObserver]' })
export class BreakpointObserverDirective implements OnChanges {
  @Input('breakpointObserver') breakpoints: BreakpointType[];

  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  ngOnChanges(): void {
    this.breakpointObserver
      .observe(this.breakpoints)
      .pipe(untilDestroyed(this))
      .subscribe((state: BreakpointState): void => {
        this.updateView(state.matches);
    });
  }

  updateView(display: boolean) {
    this.viewContainerRef.clear();

    if (display) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
