import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { RedirectModule } from '@ebay/shared/redirect';

import { SearchboxComponent } from './components';
import { UtilsNavbarComponent } from './utils-navbar.component';

@NgModule({
  declarations: [ 
    UtilsNavbarComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RedirectModule,
    MatInputModule
  ],
  exports: [
    UtilsNavbarComponent
  ]
})
export class UtilsNavbarModule {}