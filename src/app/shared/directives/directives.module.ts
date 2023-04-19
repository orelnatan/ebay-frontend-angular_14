import { NgModule } from '@angular/core';

import { SpaceDirective } from './space.directive';
import { GapDirective } from './gap.directive';
import { LoaderDirective } from './loader.directive';
import { RxResolverDirective } from './rx-resolver.directive';
import { NgLetDirective } from './ng-let.directive';
import { ReturnUrlDirective } from './return-url.directive';

@NgModule({
    declarations: [
        SpaceDirective,
        GapDirective,
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
        ReturnUrlDirective
    ],
    exports: [
        SpaceDirective,
        GapDirective,
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
        ReturnUrlDirective
    ]
})
export class DirectivesModule {}