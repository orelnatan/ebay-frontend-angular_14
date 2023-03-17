import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
    selector: '[space]',
})
export class SpaceDirective implements AfterViewInit {
    @Input() top: number = 0;
    @Input() right: number = 0;
    @Input() bottom: number = 0;
    @Input() left: number = 0;
    
    constructor(
        private readonly elementRef: ElementRef,
    ) {}

    ngAfterViewInit(): void {
       this.elementRef.nativeElement.style.padding = `
       ${this.top}px 
       ${this.right}px 
       ${this.bottom}px 
       ${this.left}px`;
    }
}