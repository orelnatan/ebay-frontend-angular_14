import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[disabledState]',
})
export class DisabledStateDirective implements OnChanges {
    @Input() disabledState: boolean;
    
    constructor(
        private readonly element: ElementRef
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if(this.disabledState) {
            this.element.nativeElement.classList.add('input-disabled-state');
        } else {
            this.element.nativeElement.classList.remove('input-disabled-state');
        }
    }
}