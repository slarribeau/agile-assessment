import { Component, OnInit } from '@angular/core';
import {QuestionSet } from './item';
import {QuestionDBService} from '../services/questionDB.service'

@Component({
  selector: 'app-q3GTyearGT25',
  template: `
  <app-q1 [itemsList1]=myQuestionSet [qIndex]=2></app-q1>
  `,
  styles: []
})
export class q3GTyearGT25Component implements OnInit {
  myQuestionSet: QuestionSet;
  constructor(private myQuestionDBService:QuestionDBService) {

    this.myQuestionSet=myQuestionDBService.getQuestionSet("gt.year.gt.25");
  }
  ngOnInit() {
    console.log(this.myQuestionSet)
  }
}
