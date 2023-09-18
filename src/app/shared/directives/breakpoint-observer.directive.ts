import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Breakpoints } from '../models/breakpoints.enum';

@UntilDestroy()
@Directive({ selector: '[breakpointObserver]' })
export class BreakpointObserverDirective implements OnChanges {
  @Input('breakpointObserver') breakpoints: Breakpoints[];

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
            console.log(state)
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
