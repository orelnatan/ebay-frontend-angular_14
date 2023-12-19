import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ModalModule } from '@ebay/shared/components';

import { DiscardChangesModalComponent } from './discard-changes-modal.component';

@NgModule({
  declarations: [ 
    DiscardChangesModalComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ModalModule,
    MatDialogModule, 
  ]
})
export class DiscardChangesModalModule {}