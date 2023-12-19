import { NgModule } from '@angular/core';

import { BreadcrumbsModule } from '@ebay/shared/breadcrumbs';
import { UtilsModule } from '@ebay/shared/utils';

import { CrumbsNavbarComponent } from './crumbs-navbar.component';

@NgModule({
  declarations: [ 
    CrumbsNavbarComponent,
  ],
  imports: [
    BreadcrumbsModule,
    UtilsModule
  ],
  exports: [
    CrumbsNavbarComponent
  ]
})
export class CrumbsNavbarModule {}