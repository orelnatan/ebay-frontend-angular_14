import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ControlValidityPipe } from '../pipes';

@Directive({
    selector: '[errorState]',
    providers: [ControlValidityPipe, ]
})
export class ErrorStateDirective implements AfterViewChecked {
    @Input('errorState') control: AbstractControl;
    
    constructor(
        private element: ElementRef,
        private controlValidityPipe: ControlValidityPipe
    ) {}

    ngAfterViewChecked(): void {
        if(this.controlValidityPipe.transform(this.control)) {
            this.element.nativeElement.classList.add('entity-error-state');
        } else {
            this.element.nativeElement.classList.remove('entity-error-state');
        }
    }
}