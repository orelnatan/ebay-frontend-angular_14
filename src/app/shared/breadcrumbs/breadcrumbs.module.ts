import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbsService } from './services';
import { RedirectByCrumbPathDirective } from './directives';
import { SkipPipe, ToStringPipe } from './pipes';
import { BreadcrumbsComponent } from './components';

@NgModule({
    declarations: [ 
        BreadcrumbsComponent,
        RedirectByCrumbPathDirective,
        ToStringPipe,
        SkipPipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BreadcrumbsComponent,
    ],
    providers: [
        BreadcrumbsService
    ]
})
export class BreadcrumbsModule {}