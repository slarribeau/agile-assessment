import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionSet } from './item';
import {QuestionDBService} from '../services/questionDB.service'
import {Q1Component} from './q1.component'


@Component({
  selector: 'app-q1GTyearLT25',
  template: `
    <app-q1 [itemsList1]=myQuestionSet.questions[0].answers></app-q1>
  `,
  styles: []
})

export class q1GTyearLT25Component implements OnInit {
  myQuestionSet: QuestionSet;
  constructor(private myQuestionDBService:QuestionDBService) {

    this.myQuestionSet=myQuestionDBService.getQuestionSet("GTyearLT25");
  }
  ngOnInit() {
    console.log(this.myQuestionSet)
  }
}