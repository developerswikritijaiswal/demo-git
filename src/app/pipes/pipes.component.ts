import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  dateToday:any;
  name =  'swikriti';
  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date();
  }

}
