import { Directive, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LoaderModalComponent } from '../modals';

@Directive({
    selector: '[loader]',
    standalone: true,
})
export class LoaderDirective implements OnChanges, OnDestroy {
    @Input('loader') active: boolean;
    
    private matDialogRef: MatDialogRef<LoaderModalComponent>;

    constructor(
        private readonly matDialogService: MatDialog,
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if(this.active) {
            this.matDialogRef = this.matDialogService.open(LoaderModalComponent, {
                disableClose: true,
                panelClass: "loader-modal"
            })
        } else {
            this.matDialogRef?.close();
        }
    }

    ngOnDestroy(): void {
        this.matDialogRef?.close();
    }
}