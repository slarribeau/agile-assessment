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

      <h2>{{line1}}</h2>
      <h2 style="color:red">{{line2}}</h2>
      <h2>{{line3}}</h2>
      <h2>{{line4}}</h2>

  `,
  styles: []
})
export class AnswerComponent implements OnInit {
  @Input() level: string; 
  @Input() answerOne: string; 
  @Input() answerTwo: string; 
  @Input() answerThree: string; 
  line1:string;
  line2:string;
  line3:string;
  line4:string;
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
      this.line1 = "";
      this.line2 = this.level+this.answerOne+this.answerTwo+this.answerThree;
    });

    if (this.answerOne == this.myQuestionSet.questions[0].correctAnswer) {
      if (this.answerTwo == this.myQuestionSet.questions[1].correctAnswer) {
        if (this.answerThree == this.myQuestionSet.questions[2].correctAnswer) {
          this.line1=("got it right")
          return;
        }
      }
    }
    let correctAnswer = this.myQuestionSet.questions[0].correctAnswer;
    if (this.answerOne != correctAnswer) {
      this.line1="Question 1: " + this.myQuestionSet.questions[0].question;
      let wrongAnswer = parseInt(this.answerOne)
      this.line2="Your Incorrect Answer: " + this.myQuestionSet.questions[0].answers[wrongAnswer].name;
      this.line3="Correct Answer: " + this.myQuestionSet.questions[0].answers[correctAnswer].name

    }

    this.line4 = "you really should hire an agile coach to help you out"
  }
}
