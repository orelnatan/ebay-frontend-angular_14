import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '@ebay/shared/breadcrumbs';

import { CrumbsbarComponent } from './crumbsbar.component';

@NgModule({
    declarations: [ 
        CrumbsbarComponent,
    ],
    imports: [
        BreadcrumbsModule
    ],
    exports: [
        CrumbsbarComponent
    ]
})
export class CrumbsbarModule {}