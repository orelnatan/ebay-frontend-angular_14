import { Component, Inject, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalType } from '@ebay/shared/components/modal';

@Component({
  selector: 'edit-entity-modal',
  templateUrl: './edit-entity-modal.component.html',
  styles: [`
    crumbs-navbar {
      position: sticky;
      top: 0;
      z-index: 999;
    }
  `]
})
export class EditEntityModalComponent {
  modalType = ModalType;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { 
      template: TemplateRef<RouterOutlet>
    }
  ) {}
}
