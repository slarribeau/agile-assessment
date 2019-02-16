import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {QuestionDBService} from './services/questionDB.service'
import {QuestionSet } from './questions/item';

@Component({
  selector: 'app-answer',
  template: `
    <p>
      Calculating the answers!
      </p>

      <h2>{{foobar}}</h2>
      <h2>{{foobar2}}</h2>
  `,
  styles: []
})
export class AnswerComponent implements OnInit {
  @Input() level: string; 
  @Input() answerOne: string; 
  @Input() answerTwo: string; 
  @Input() answerThree: string; 
  foobar:string;
  foobar2:string;
  myQuestionSet: QuestionSet;

  constructor(private myQuestionDBService:QuestionDBService, private route: ActivatedRoute) {
    this.myQuestionSet=myQuestionDBService.getQuestionSet("GTyearLT25");
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.level = params.get('level');
      this.answerOne = params.get('answerOne');
      this.answerTwo = params.get('answerTwo');
      this.answerThree = params.get('answerThree');
      this.foobar = "";
      this.foobar2 = this.level+this.answerOne+this.answerTwo+this.answerThree;
    });

    if (this.answerOne == this.myQuestionSet.questions[0].correctAnswer) {
      if (this.answerTwo == this.myQuestionSet.questions[1].correctAnswer) {
        if (this.answerThree == this.myQuestionSet.questions[2].correctAnswer) {
          this.foobar=("got it right")
          return;
        }
      }
    }
    this.foobar = "you really should hire an agile coach to help you out"
  }
}
