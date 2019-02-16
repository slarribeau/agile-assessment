import { Component, OnInit } from '@angular/core';
import { Answer } from './item';
import {Q1Service} from '../services/q1.service'
import {Q1Component} from './q1.component'

@Component({
  selector: 'app-q1LTyearLT25',
  template: `
  <app-q1 [itemsList1]=answers></app-q1>
  `,
  styles: []
})
export class q1LTyearLT25Component implements OnInit {
  answers: Answer[]
  constructor(){
     this.answers = [
      {
          name:'???Are you a BORG?',
          value:'R1'
      },
      {
          name:'???Dominoes?',
          value:'R2'
      },
      {
          name:'???Chinese Food!',
          value:'R3'
      },
    ];
  }
  ngOnInit() {
    console.log(this.answers)
  }
}