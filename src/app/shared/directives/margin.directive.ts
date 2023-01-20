import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

declare type unit = "px" | "%";

@Directive({
    selector: '[margin]',
    standalone: true
})
export class MarginDirective implements AfterViewInit {
    @Input() unit: unit = "px";
    @Input() custom: string;
    @Input() top: number = 0;
    @Input() right: number = 0;
    @Input() bottom: number = 0;
    @Input() left: number = 0;
    
    constructor(
        private readonly elementRef: ElementRef,
    ) {}

    ngAfterViewInit(): void {
       this.elementRef.nativeElement.style.margin = this.custom ? this.custom : `
       ${this.top}${this.unit}
       ${this.right}${this.unit}
       ${this.bottom}${this.unit}
       ${this.left}${this.unit}`;
    }
}