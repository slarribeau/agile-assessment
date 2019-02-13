import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {Q3Service} from '../services/q3.service'
import {Q3Component} from './q3.component'

@Component({
  selector: 'app-q2LTyearLT25',
  template: `
  <app-q3 [itemsList3]=ITEMS></app-q3>
  `,
  styles: []
})
export class q3LTyearLT25Component implements OnInit {
  ITEMS: Item[]
  constructor(){
     this.ITEMS = [
      {
          name:'3333Are you a BORG?CCCC',
          value:'R0'
      },
      {
          name:'3333Dominoes?CCCCC',
          value:'R1'
      },
      {
          name:'3333Chinese Food!CCCCC',
          value:'R2'
      },
    ];
  }
  ngOnInit() {
    console.log(this.ITEMS)
  }
}
