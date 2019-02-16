import { Component, OnInit } from '@angular/core';
import { QuestionSet } from './item';
import {QuestionDBService} from '../services/questionDB.service';

@Component({
  selector: 'app-q1GTyearLT25',
  template: `
    <app-q1 
       [itemsList1]=myQuestionSet [qIndex]=0>
    </app-q1>
  `,
  styles: []
})

export class q1GTyearLT25Component implements OnInit {
  myQuestionSet: QuestionSet;
  constructor(private myQuestionDBService:QuestionDBService) {
    this.myQuestionSet=myQuestionDBService.getQuestionSet("GTyearLT25");
  }
  ngOnInit() {
    console.log("q1.gt.year.lt.25:myQuestionSet:");
    console.log(this.myQuestionSet);
  }
}