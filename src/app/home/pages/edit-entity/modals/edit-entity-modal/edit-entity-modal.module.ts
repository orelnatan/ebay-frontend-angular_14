import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrumbsNavbarModule, ModalModule } from '@ebay/shared/components';

import { EditEntityModalComponent } from './edit-entity-modal.component';

@NgModule({
  declarations: [ 
    EditEntityModalComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    CrumbsNavbarModule
  ]
})
export class EditEntityModalModule {}