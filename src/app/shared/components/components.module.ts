import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ModalComponent } from './modal';
import { SpinnerComponent } from './spinner';
import { ElementsGridComponent } from './elements-grid';

@NgModule({
    declarations: [
        ModalComponent,
        SpinnerComponent,
        ElementsGridComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        ModalComponent,
        SpinnerComponent,
        ElementsGridComponent
    ]
})
export class ComponentsModule {}