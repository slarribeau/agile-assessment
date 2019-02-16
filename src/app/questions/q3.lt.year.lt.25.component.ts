import { Component, OnInit } from '@angular/core';
import { Answer } from './item';
import {Q3Service} from '../services/q3.service'
import {Q3Component} from './q3.component'

@Component({
  selector: 'app-q2LTyearLT25',
  template: `
  <app-q3 [itemsList3]=answer></app-q3>
  `,
  styles: []
})
export class q3LTyearLT25Component implements OnInit {
  answer: Answer[]
  constructor(){
     this.answer = [
      {
          name:'3333Are you a BORG?CCCC',
          value:'R1'
      },
      {
          name:'3333Dominoes?CCCCC',
          value:'R2'
      },
      {
          name:'3333Chinese Food!CCCCC',
          value:'R3'
      },
    ];
  }
  ngOnInit() {
    console.log(this.answer)
  }
}
