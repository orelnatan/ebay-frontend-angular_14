import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
})
export class BreadcrumbsModule {}