import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalComponent } from '../../components';

import { alert } from '../../types';
import { IAction, IAlertData } from './models';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ModalComponent,
  ]
})
export class AlertModalComponent {
    colors: Record<alert, string> = {
      success: "#228B22",
      failure: "#FF6060",
      info: "#1D72F3",
      warning: "#FFC007",
      blank: "#000000",
    }

    constructor(
      public dialogRef: MatDialogRef<AlertModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: IAlertData,
    ) {}

    handleAction(action: IAction): void {
      this.dialogRef.close({
         name: action.name,
         task: action.task || (() => {})
      })
    }
}
