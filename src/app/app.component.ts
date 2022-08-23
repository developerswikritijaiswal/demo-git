import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular';
  firstName: string;
   lastName: string;
   siblings:  any[]=[];
   eventEmitter : string = 'welcome'

   ngOnInit(){
    this.firstName ='swikriti1'
    this.lastName = 'jaiswal'
    this.siblings = [{fname:'swikriti', lname:'jaiswal' },
    {fname:'jagriti', lname:'jaiswal' },
    {fname:'shubh', lname:'jaiswal' },
  ]
   }
    // output
    parentEventHandler(eventemit:any){
      this.eventEmitter = eventemit;
    }
}
