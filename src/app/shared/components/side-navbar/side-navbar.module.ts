import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsModule } from '@ebay/shared/utils';

import { SideNavbarComponent } from './side-navbar.component';

@NgModule({
  declarations: [ 
    SideNavbarComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [
    SideNavbarComponent
  ]
})
export class SideNavbarModule {}