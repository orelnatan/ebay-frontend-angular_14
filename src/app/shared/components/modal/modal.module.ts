import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './modal.component';

@NgModule({
    declarations: [ 
        ModalComponent,
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule {}