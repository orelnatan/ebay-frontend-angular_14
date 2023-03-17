import { Directive, EventEmitter,  Output } from '@angular/core';
import { MatDialog, MatDialogRef,  } from '@angular/material/dialog';

import { AlertModalComponent } from '@ebay/shared/modals';
import { IAction } from '@ebay/shared/modals/alert-modal/models';

@Directive({
    selector: '[logout]',
    exportAs: 'logout'
})
export class LogoutDirective {    
    @Output() logout: EventEmitter<void> = new EventEmitter();
    
    constructor(
        private readonly matDialogService: MatDialog,
    ) {}

    public show(): void {
        const matDialogRef: MatDialogRef<AlertModalComponent> = this.matDialogService.open(AlertModalComponent, {
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