import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private render:Renderer2,private element:ElementRef) { }



  @HostListener('mouseover') onMouseEnter(){
    this.render.setStyle(this.element.nativeElement,'background-color','yellow');
  }

  @HostListener('mouseout')  onMouseOut(){
    this.render.removeStyle(this.element.nativeElement,'background-color');
  }
}
