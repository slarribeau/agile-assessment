import {Component, OnInit} from '@angular/core';
import {QuestionSet} from './item';
import {QuestionDBService} from '../services/questionDB.service'

@Component({
  selector: 'app-q2LTyearGT25',
  template: `
  <app-q1 [itemsList1]=myQuestionSet [qIndex]=1></app-q1>
  `,
  styles: []
})

export class q2LTyearGT25Component implements OnInit {
  myQuestionSet: QuestionSet;
  constructor(private myQuestionDBService:QuestionDBService) {

    this.myQuestionSet=myQuestionDBService.getQuestionSet("lt.year.gt.25");
  }
  ngOnInit() {
    console.log(this.myQuestionSet)
  }
}
