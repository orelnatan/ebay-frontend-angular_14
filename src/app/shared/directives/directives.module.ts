import { NgModule } from '@angular/core';

import { RxResolverDirective } from './rx-resolver.directive';
import { NgLetDirective } from './ng-let.directive';
import { BreakpointObserverDirective } from './breakpoint-observer.directive';
import { ImageNotFoundDirective } from './image-not-found.directive';

@NgModule({
    declarations: [
        RxResolverDirective,
        NgLetDirective,
        BreakpointObserverDirective,
        ImageNotFoundDirective
    ],
    exports: [
        RxResolverDirective,
        NgLetDirective,
        BreakpointObserverDirective,
        ImageNotFoundDirective
    ]
})
export class DirectivesModule {}