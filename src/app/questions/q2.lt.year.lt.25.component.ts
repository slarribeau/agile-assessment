import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {Q2Service} from '../services/q2.service'
import {Q2Component} from './q2.component'

@Component({
  selector: 'app-q2LTyearLT25',
  template: `
    <app-q1 [itemsList]=ITEMS></app-q1>
  `,
  styles: []
})

export class q2LTyearLT25Component implements OnInit {
  ITEMS: Item[]
  constructor(){
     this.ITEMS = [
      {
          name:'2222Are you a BORG?',
          value:'R0'
      },
      {
          name:'2222Dominoes?',
          value:'R1'
      },
      {
          name:'2222Chinese Food!',
          value:'R2'
      },
    ];
  }
  ngOnInit() {
    console.log(this.ITEMS)
  }
}
