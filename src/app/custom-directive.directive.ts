import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private sDirective:ElementRef) {
    sDirective.nativeElement.style.background= 'yellow';
   }

}
