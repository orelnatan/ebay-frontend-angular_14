import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { UtilsModule } from '@ebay/shared/utils';

import { AppNavbarComponent } from './app-navbar.component';

@NgModule({
  declarations: [
    AppNavbarComponent
  ],
  imports: [ 
    CommonModule,
    RouterLink,
    MatIconModule,
    UtilsModule
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class AppNavbarModule {}