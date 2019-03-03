import { Component, OnInit, Input } from '@angular/core';
import { QuestionSet } from './item';
import {Q1Service} from '../services/q1.service'
import {Q2Service} from '../services/q2.service'
import {Q3Service} from '../services/q3.service'


@Component({
  selector: 'app-q1',
  template: `
  <h2>Question {{qIndex+2}}</h2>
  <h3 [innerHTML]=
  "itemsList1.questions[qIndex].question">
  </h3>
  <div class="question_box">
    <h3> Choose One</h3>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of itemsList1.questions[qIndex].answers">
        <input type="radio" [(ngModel)]="questionSelected" name="list_name" value="{{item.value}}" (change)="onItemChange(item)" />
        {{item.name}}
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['../app.component.css']
})

export class Q1Component implements OnInit {
  questionSelected: string;
  @Input() itemsList1: QuestionSet; 
  @Input() qIndex: number; 

  constructor(private myInputService1:Q1Service,
              private myInputService2:Q2Service,
              private myInputService3:Q3Service) {}

  ngOnInit() {
    console.log("q1.componeent:itemList1:");
    console.log(this.qIndex);
    console.log(this.itemsList1)
    console.log(this.itemsList1.questions[this.qIndex].answers)
  }
  
  onItemChange(item) {
    console.log(item)
    if (this.qIndex==0){
      this.myInputService1.notifyParent(this.questionSelected);
    }
    if (this.qIndex==1){
      this.myInputService2.notifyParent(this.questionSelected);
    }
    if (this.qIndex==2){
      this.myInputService3.notifyParent(this.questionSelected);
    }
  }
}
