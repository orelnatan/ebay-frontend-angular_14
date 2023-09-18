import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ModalType } from '@ebay/shared/components/modal';

@Component({
  selector: 'logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss'],
})
export class LogoutModalComponent {
    modalType = ModalType;

    constructor(
        public matDialogRef: MatDialogRef<LogoutModalComponent>,
    ) {}
  
    logout(): void {
        this.matDialogRef.close(true);
    }
}
