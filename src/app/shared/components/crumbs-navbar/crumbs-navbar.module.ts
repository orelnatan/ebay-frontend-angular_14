import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '@ebay/shared/breadcrumbs';
import { DirectivesModule } from '@ebay/shared/directives';

import { CrumbsNavbarComponent } from './crumbs-navbar.component';

@NgModule({
    declarations: [ 
        CrumbsNavbarComponent,
    ],
    imports: [
        BreadcrumbsModule,
        DirectivesModule
    ],
    exports: [
        CrumbsNavbarComponent
    ]
})
export class CrumbsNavbarModule {}