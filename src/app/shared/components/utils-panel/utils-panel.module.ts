import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { UtilsPanelComponent } from './utils-panel.component';

@NgModule({
    declarations: [ 
        UtilsPanelComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
    ],
    exports: [
        UtilsPanelComponent
    ]
})
export class UtilsPanelModule {}