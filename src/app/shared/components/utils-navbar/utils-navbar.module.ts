import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { UtilsNavbarComponent } from './utils-navbar.component';

@NgModule({
    declarations: [ 
        UtilsNavbarComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
    ],
    exports: [
        UtilsNavbarComponent
    ]
})
export class UtilsNavbarModule {}