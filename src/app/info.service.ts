import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  info1: string[]=["Adam Taylor",'E354', 'at@abc.net']
  info2:string[]=['swik','jaggs']
 

  items=[{fname:'swikriti', lname:'jaiswal' },
  {fname:'jagriti', lname:'jaiswal' },
  {fname:'shubh', lname:'jaiswal' },
]
bevarage = ['tea','coffee','milk']

demo = [7,3,5,8,2]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
 
  getItems(){
    return this.items;
  }
  getbevarage(){
    return this.bevarage;
  }
  getdemos(){
    return this.demo;
  }
  constructor() { }
}
