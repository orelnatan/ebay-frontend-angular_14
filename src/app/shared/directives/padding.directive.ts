import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

declare type unit = "px" | "%";

@Directive({
    selector: '[padding]',
    standalone: true
})
export class PaddingDirective implements AfterViewInit {
    @Input() unit: unit = "px";
    @Input() all: number;
    @Input() top: number = 0;
    @Input() right: number = 0;
    @Input() bottom: number = 0;
    @Input() left: number = 0;
    
    constructor(
        private readonly elementRef: ElementRef,
    ) {}

    ngAfterViewInit(): void {
       this.elementRef.nativeElement.style.padding = this.all ? `${this.all}${this.unit}` : `
       ${this.top}${this.unit}
       ${this.right}${this.unit}
       ${this.bottom}${this.unit}
       ${this.left}${this.unit}`;
    }
}