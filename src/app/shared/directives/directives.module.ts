import { NgModule } from '@angular/core';

import { RxResolverDirective } from './rx-resolver.directive';
import { NgLetDirective } from './ng-let.directive';
import { BreakpointObserverDirective } from './breakpoint-observer.directive';

@NgModule({
    declarations: [
        RxResolverDirective,
        NgLetDirective,
        BreakpointObserverDirective
    ],
    exports: [
        RxResolverDirective,
        NgLetDirective,
        BreakpointObserverDirective
    ]
})
export class DirectivesModule {}