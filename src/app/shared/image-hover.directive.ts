import { Directive, HostListener, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appImageHover]'
})
export class ImageHoverDirective {
    constructor(private renderer: Renderer2,private hostElement: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.addClass(this.hostElement.nativeElement, "image-hover")
    }
}