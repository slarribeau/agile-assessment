import { Component, OnInit } from '@angular/core';
import { Answer } from './item';
import {Q2Service} from '../services/q2.service'
import {Q2Component} from './q2.component'

@Component({
  selector: 'app-q2LTyearLT25',
  template: `
    <app-q2 [itemsList2]=answer></app-q2>
  `,
  styles: []
})

export class q2LTyearLT25Component implements OnInit {
  answer: Answer[]
  constructor(){
     this.answer = [
      {
          name:'2222Are you a BORG?',
          value:'R1'
      },
      {
          name:'2222Dominoes?',
          value:'R2'
      },
      {
          name:'2222Chinese Food!',
          value:'R3'
      },
    ];
  }
  ngOnInit() {
    console.log(this.answer)
  }
}
