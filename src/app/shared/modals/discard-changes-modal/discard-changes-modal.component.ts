import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ModalType } from '@ebay/shared/components/modal';

@Component({
  selector: 'discard-changes-modal',
  templateUrl: './discard-changes-modal.component.html',
})
export class DiscardChangesModalComponent {
  modalType = ModalType;

  constructor(
    public matDialogRef: MatDialogRef<DiscardChangesModalComponent>,
  ) {}
  
  discard(): void {
    this.matDialogRef.close(true);
  }
}
