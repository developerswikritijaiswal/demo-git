import { Component, OnInit } from '@angular/core';
import { InfoService } from "../info.service"
@Component({
  selector: 'app-dependency-demo',
  templateUrl: './dependency-demo.component.html',
  styleUrls: ['./dependency-demo.component.css'],
  providers: [InfoService]
})
export class DependencyDemoComponent implements OnInit {
  infoReceived1: string[]=[];
  infos:string[]=[];
    getInfoFromService1(){
      this.infoReceived1 = this.rservice.getInfo1();
      this.infos = this.rservice.getInfo2();
    }

  
  constructor(private rservice: InfoService) { }

  ngOnInit(): void {
  }

}
