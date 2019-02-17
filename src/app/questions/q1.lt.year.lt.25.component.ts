import {Component, OnInit } from '@angular/core';
import {QuestionSet } from './item';
import {QuestionDBService} from '../services/questionDB.service'

@Component({
  selector: 'app-q1LTyearLT25',
  template: `
  <app-q1 [itemsList1]=myQuestionSet [qIndex]=0></app-q1>
  `,
  styles: []
})
export class q1LTyearLT25Component implements OnInit {
  myQuestionSet: QuestionSet;
  constructor(private myQuestionDBService:QuestionDBService) {

    this.myQuestionSet=myQuestionDBService.getQuestionSet("LTyearLT25");
  }
  ngOnInit() {
    console.log(this.myQuestionSet)
  }
}