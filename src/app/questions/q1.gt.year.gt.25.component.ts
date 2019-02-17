import { Component, OnInit } from '@angular/core';
import { QuestionSet } from './item';
import {QuestionDBService} from '../services/questionDB.service';

@Component({
  selector: 'app-q1GTyearGT25',
  template: `
    <app-q1 
       [itemsList1]=myQuestionSet [qIndex]=0>
    </app-q1>
  `,
  styles: []
})

export class q1GTyearGT25Component implements OnInit {
  myQuestionSet: QuestionSet;
  constructor(private myQuestionDBService:QuestionDBService) {
    this.myQuestionSet=myQuestionDBService.getQuestionSet("GTyearGT25");
  }
  ngOnInit() {
    console.log("q1.gt.year.gt.25:myQuestionSet:");
    console.log(this.myQuestionSet);
  }
}