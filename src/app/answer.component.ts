import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router, Route, ParamMap} from '@angular/router';



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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.level = params.get('level');
      this.answerOne = params.get('answerOne');
      this.answerTwo = params.get('answerTwo');
      this.answerThree = params.get('answerThree');
      this.foobar = "you really should hire an agile coach to help you out"
      this.foobar2 = this.level+this.answerOne+this.answerTwo+this.answerThree;
    });

  }
}
