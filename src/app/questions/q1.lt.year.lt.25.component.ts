import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {Q1Service} from '../services/q1.service'
import {Q1Component} from './q1.component'





@Component({
  selector: 'app-q1LTyearLT25',
  template: `
  <app-q1 [itemsList]=ITEMS></app-q1>
  `,
  styles: []
})
export class q1LTyearLT25Component implements OnInit {
  ITEMS: Item[]
  constructor(){
     this.ITEMS = [
      {
          name:'???Are you a BORG?',
          value:'R0'
      },
      {
          name:'???Dominoes?',
          value:'R1'
      },
      {
          name:'???Chinese Food!',
          value:'R2'
      },
    ];
  }
  ngOnInit() {
    console.log(this.ITEMS)
  }
}
