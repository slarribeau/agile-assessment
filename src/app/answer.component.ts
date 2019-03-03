import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {QuestionDBService} from './services/questionDB.service'
import {QuestionSet } from './questions/item';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./app.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() level: string; 
  @Input() answerOne: string; 
  @Input() answerTwo: string; 
  @Input() answerThree: string; 
  myQuestionSet: QuestionSet;
  score:number;
  foo:QuestionDBService;
  displayCorrect:string;
  displayInCorrect:string;


  constructor(private myQuestionDBService:QuestionDBService, private route: ActivatedRoute) {
    this.foo=myQuestionDBService;
    this.score=25;
    this.displayCorrect="You selected the best answer!";
    this.displayInCorrect="Your answer was not the best answer:";
    console.log("answer constructor begin")
    console.log(this.level)
    console.log(this.myQuestionSet)
    console.log("answer constructor end")
  }

  calculateResults() {
    if (this.answerOne == this.myQuestionSet.questions[0].correctAnswer) {
      if (this.answerTwo == this.myQuestionSet.questions[1].correctAnswer) {
        if (this.answerThree == this.myQuestionSet.questions[2].correctAnswer) {
          this.score=100
          return;
        }
      }
    }
    if (this.answerOne == this.myQuestionSet.questions[0].correctAnswer) {
      this.score=this.score+25;
    }

    if (this.answerTwo == this.myQuestionSet.questions[1].correctAnswer) {
      this.score=this.score+25;
    }

    if (this.answerThree == this.myQuestionSet.questions[2].correctAnswer) {
      this.score=this.score+25;
    }
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.level = params.get('level');
      this.answerOne = params.get('answerOne');
      this.answerTwo = params.get('answerTwo');
      this.answerThree = params.get('answerThree');
    });
    this.myQuestionSet=this.foo.getQuestionSet(this.level);
    this.score=25;
    console.log("answer nginit begin")
    console.log(this.level)
    console.log(this.myQuestionSet)
    console.log("answer nginit end")
    this.calculateResults();
  }
}
