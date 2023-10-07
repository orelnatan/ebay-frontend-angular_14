import { Directive, ElementRef, HostListener } from "@angular/core";

const IMAGE_NOT_FOUND_PATH: string = '../../../assets/images/jpeg/image-not-found.jpeg';

@Directive({
  selector: "img[imageNotFound]",
})
export class ImageNotFoundDirective {
    @HostListener("error") onerror() {
        this.elementRef.nativeElement.src = IMAGE_NOT_FOUND_PATH;
    }

    constructor(
        private readonly elementRef: ElementRef<HTMLImageElement>
    ) {}
}