import { Component, OnInit } from '@angular/core';
import{InfoService} from '../info.service'
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  itemslist:any[]=[];
  bevrageList:any[]=[];
  demolists:any[]=[];
  show:any;
  view:any;
  customCss:any;
  class:any;
  constructor(private rservice:InfoService) { }

  ngOnInit(): void {
    this.show = false;
    this.customCss = {
      'color':'red',
    }
    this.itemslist = this.rservice.getItems();
    this.bevrageList = this.rservice.getbevarage();
    this.demolists = this.rservice.getdemos().sort();
  }
  onClickButton(){
     this.view;
  }
}
