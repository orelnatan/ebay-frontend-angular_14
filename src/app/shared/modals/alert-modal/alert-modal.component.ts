import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ComponentsModule } from '@ebay/shared/components';
import { IAction, IAlertData } from '@ebay/shared/models';
import { alert } from '@ebay/shared/types';

@Component({
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ComponentsModule,
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
