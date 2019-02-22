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
  score:number;

  constructor(private myQuestionDBService:QuestionDBService, private route: ActivatedRoute) {
    this.myQuestionSet=myQuestionDBService.getQuestionSet("GTyearLT25");
    this.score=25;
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
      this.line1 = "";
      this.line2 = this.level+this.answerOne+this.answerTwo+this.answerThree;
    });
    this.calculateResults();
  }
}
