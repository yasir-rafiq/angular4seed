import {Directive, ElementRef, HostBinding, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isOpen = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.elementRef = elementRef;
  }

  @HostBinding('class.show') get opened() {
    return this.isOpen;
  }
  @HostBinding('class.show') get openedMenu() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.renderer.setElementClass(this.elementRef.nativeElement.querySelector('div'), 'show', true);
    this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.renderer.setElementClass(this.elementRef.nativeElement.querySelector('div'), 'show', false);
    this.isOpen = false;
  }
}
