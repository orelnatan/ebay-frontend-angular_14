import { NgModule } from '@angular/core';

import { ModalsModule } from '../modals';

import { SpaceDirective } from './space.directive';
import { GapDirective } from './gap.directive';
import { LoaderDirective } from './loader.directive';
import { RxResolverDirective } from './rx-resolver.directive';
import { NgLetDirective } from './ng-let.directive';

@NgModule({
    declarations: [
        SpaceDirective,
        GapDirective,
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
    ],
    imports: [
        ModalsModule
    ],
    exports: [
        SpaceDirective,
        GapDirective,
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
    ]
})
export class DirectivesModule {}