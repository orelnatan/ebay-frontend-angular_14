import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AlertModalComponent } from '@ebay/shared/modals';
import { IAction } from '@ebay/shared/modals/alert-modal/models';

@Component({
  selector: 'logout',
  template: ``,
  standalone: true,
  imports: [MatDialogModule]
})
export class LogoutComponent {
    @Output() logout: EventEmitter<void> = new EventEmitter();
    
    constructor(
        private readonly matDialogService: MatDialog,
    ) {}

    public showLogoutModal(): void {
        const matDialogRef = this.matDialogService.open(AlertModalComponent, {
            data: {         
              type: "info",
              title: "Log out?",
              content: "Are you sure you want to logout?",
              actions: [
                    { 
                        name: "I want to stay"
                    },
                    { 
                        name: "Log me out", 
                        task: () => { this.logout.emit() }
                    }
                ]
            }
        })
      
        matDialogRef.afterClosed().subscribe((action: IAction) => {
            action?.task();
        })
    }
}
