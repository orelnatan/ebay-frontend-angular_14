import { NgModule } from '@angular/core';

import { LoaderDirective } from './loader.directive';
import { LogoutDialogDirective } from './logout-dialog.directive';
import { RxResolverDirective } from './rx-resolver.directive';
import { NgLetDirective } from './ng-let.directive';

@NgModule({
    declarations: [
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
        LogoutDialogDirective
    ],
    exports: [
        LoaderDirective,
        RxResolverDirective,
        NgLetDirective,
        LogoutDialogDirective
    ]
})
export class DirectivesModule {}