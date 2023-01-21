import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[disabledState]',
})
export class DisabledStateDirective implements OnChanges {
    @Input() disabledState: boolean;
    
    constructor(
        private element: ElementRef
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        if(this.disabledState) {
            this.element.nativeElement.classList.add('entity-disabled-state');
        } else {
            this.element.nativeElement.classList.remove('entity-disabled-state');
        }
    }
}