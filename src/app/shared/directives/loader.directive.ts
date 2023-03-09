import { Directive } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LoaderModalComponent } from '../modals';

@Directive({
    selector: '[loader]',
    standalone: true,
    exportAs: 'loader'
})
export class LoaderDirective {    
    private matDialogRef: MatDialogRef<LoaderModalComponent>;

    constructor(
        private readonly matDialogService: MatDialog,
    ) {}

    show(): void {
        this.matDialogRef = this.matDialogService.open(LoaderModalComponent, {
            disableClose: true,
            panelClass: "loader-modal"
        })
    }

    hide(): void {
        this.matDialogRef?.close();
    }
}