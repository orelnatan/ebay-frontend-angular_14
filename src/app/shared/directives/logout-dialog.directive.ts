import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { AlertModalComponent, IAction } from '../modals';

@Directive({
    selector: '[logoutDialog]'
})
export class LogoutDialogDirective {    
    @HostListener('click') onclick(): void {
        this._showDialog();
    };
    
    @Output() logout: EventEmitter<void> = new EventEmitter();
    
    constructor(
        private readonly matDialog: MatDialog,
    ) {}

    private _showDialog(): void {
        const matDialogRef: MatDialogRef<AlertModalComponent> = this.matDialog.open(AlertModalComponent, {
            data: {         
              type: "info",
              title: "Log out?",
              content: "Are you sure you want to logout?",
              actions: [
                { name: "I want to stay" },
                { name: "Log me out", task: () => { this.logout.emit() }}
              ] as Array<IAction>
            }
        })
      
        matDialogRef.afterClosed().subscribe((action: IAction) => {
            action?.task();
        })
    }
}