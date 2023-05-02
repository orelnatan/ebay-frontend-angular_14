import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { RedirectModule } from '@ebay/shared/redirect';

import { UtilsNavbarComponent } from './utils-navbar.component';

@NgModule({
    declarations: [ 
        UtilsNavbarComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
        RedirectModule
    ],
    exports: [
        UtilsNavbarComponent
    ]
})
export class UtilsNavbarModule {}