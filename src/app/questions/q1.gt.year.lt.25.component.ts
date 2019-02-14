import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {Q1Service} from '../services/q1.service'
import {Q1Component} from './q1.component'

@Component({
  selector: 'app-q1GTyearLT25',
  template: `
    <app-q1 [itemsList1]=ITEMS></app-q1>
  `,
  styles: []
})

export class q1GTyearLT25Component implements OnInit {
  ITEMS: Item[]
  constructor(){
     this.ITEMS = [
      {
          name:'Are you a BORG?',
          value:'R1'
      },
      {
          name:'Dominoes?',
          value:'R2'
      },
      {
          name:'Chinese Food!',
          value:'R3'
      },
    ];
  }
  ngOnInit() {
    console.log(this.ITEMS)
  }
}