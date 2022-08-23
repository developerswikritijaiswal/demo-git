import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  orderStatus: any;
  data!: Observable<any>;
  greenColor:any;
  constructor() { }

  ngOnInit(): void {
    this.greenColor = {'color':'green'}
    new Observable(observer=>{
      setTimeout(() => {
        observer.next('In Progress');
      }, 2000);
      setTimeout(() => {
        observer.next('Processing');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.next('Complete');
      }, 8000);
     
    }).subscribe(value=>{
      this.orderStatus = value;
    });
   
   
  }
    
}
