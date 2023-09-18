import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ModalModule } from '@ebay/shared/components';

import { LogoutModalComponent } from './logout-modal.component';

@NgModule({
    declarations: [ 
        LogoutModalComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        ModalModule,
        MatDialogModule, 
    ]
})
export class LogoutModalModule {}