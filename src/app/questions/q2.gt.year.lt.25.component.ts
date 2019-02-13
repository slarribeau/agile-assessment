import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {Q2Service} from '../services/q2.service'
import {Q2Component} from './q2.component'

@Component({
  selector: 'app-q2GTyearLT25',
  template: `
  <app-q2 [itemsList2]=ITEMS></app-q2>
  `,
  styles: []
})

export class q2GTyearLT25Component implements OnInit {
  ITEMS: Item[]
  constructor(){
     this.ITEMS = [
      {
          name:'1111Are you a BORG?',
          value:'R0'
      },
      {
          name:'1111Dominoes?',
          value:'R1'
      },
      {
          name:'1111Chinese Food!',
          value:'R2'
      },
    ];
  }
  ngOnInit() {
    console.log(this.ITEMS)
  }
}
