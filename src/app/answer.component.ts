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
      <h2>{{line2}}</h2>
      <h2 style="color:red">{{line3}}</h2>
      <h2>{{line4}}</h2>
---------------------------------
      <h2>{{line5}}</h2>
      <h2>{{line6}}</h2>
      <h2 style="color:red">{{line7}}</h2>
      <h2>{{line8}}</h2>
--------------------------------------
      <h2>{{line9}}</h2>
      <h2>{{line10}}</h2>
      <h2 style="color:red">{{line11}}</h2>
      <h2>{{line12}}</h2>

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
  line5:string;
  line6:string;
  line7:string;
  line8:string;
  line9:string;
  line10:string;
  line11:string;
  line12:string;
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
    this.line1="Question 1: " + this.myQuestionSet.questions[0].question;
    let yourAnswer = parseInt(this.answerOne)
    this.line2="Correct Answer: " + this.myQuestionSet.questions[0].answers[correctAnswer].name
    this.line3="Your Answer: " + this.myQuestionSet.questions[0].answers[yourAnswer].name;

    if (this.answerOne != correctAnswer) {
      this.line4 = "INCORRECT: you really should hire an agile coach to help you out"
    } else {
      this.line4 = "CORRECT! -- Good Job Agilist!"
    }

    correctAnswer = this.myQuestionSet.questions[1].correctAnswer;
    this.line5="Question 2: " + this.myQuestionSet.questions[1].question;
    yourAnswer = parseInt(this.answerTwo)
    this.line6="Correct Answer: " + this.myQuestionSet.questions[1].answers[correctAnswer].name
    this.line7="Your Answer: " + this.myQuestionSet.questions[1].answers[yourAnswer].name;

    if (this.answerTwo != correctAnswer) {
      this.line8 = "INCORRECT: you really should hire an agile coach to help you out"
    } else {
      this.line8 = "CORRECT! -- Good Job Agilist!"
    }

    correctAnswer = this.myQuestionSet.questions[2].correctAnswer;
    this.line9="Question 3: " + this.myQuestionSet.questions[2].question;
    yourAnswer = parseInt(this.answerThree)
    this.line10="Correct Answer: " + this.myQuestionSet.questions[2].answers[correctAnswer].name
    this.line11="Your Answer: " + this.myQuestionSet.questions[2].answers[yourAnswer].name;

    if (this.answerThree != correctAnswer) {
      this.line12 = "INCORRECT: you really should hire an agile coach to help you out"
    } else {
      this.line12 = "CORRECT! -- Good Job Agilist!"
    }

  }
}
