import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RedirectDirective } from './directives';
import { VisibilityPipe, ToStringPipe } from './pipes';
import { BreadcrumbsComponent, CrumbComponent } from './components';

@NgModule({
    declarations: [ 
        BreadcrumbsComponent,
        CrumbComponent,
        RedirectDirective,
        ToStringPipe,
        VisibilityPipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BreadcrumbsComponent,
    ],
})
export class BreadcrumbsModule {}