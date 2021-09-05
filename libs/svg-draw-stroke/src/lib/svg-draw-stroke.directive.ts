import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[btdSvgDrawStroke], btdSvgDrawStroke',
})
export class SvgDrawStrokeDirective implements AfterViewInit {
  constructor(private el: ElementRef<SVGElement>) {}

  ngAfterViewInit(): void {
    console.log(this.el.nativeElement);
  }
}
