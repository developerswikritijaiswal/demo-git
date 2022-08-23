import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective implements OnInit {
  @Input() CustomIf = true;
  constructor(
    private tempRef: TemplateRef<any>,
     private vcRef: ViewContainerRef
     ) { }

     ngOnInit(){
       if(this.CustomIf){
          this.vcRef.createEmbeddedView(this.tempRef);
       }else{
         this.vcRef.clear();
       }
     }

}
