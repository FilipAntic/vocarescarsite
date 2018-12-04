import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuCollapse]'
})
export class MenuCollapseDirective {


  constructor(private el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
  onScroll($event) {
    console.log($event)
  }
}
