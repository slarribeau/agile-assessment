import { Component, OnInit, Input } from '@angular/core';
import { Answer } from './item';
import {Q1Service} from '../services/q1.service'

@Component({
  selector: 'app-q1',
  template: `
    <p>
      Q1
    </p>
    <div>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of itemsList1">
        <input type="radio" [(ngModel)]="questionSelected" name="list_name" value="{{item.value}}" (change)="onItemChange(item)" />
        {{item.name}}
      </li>
    </ul>
  </div>
  `,
  styles: []
})

export class Q1Component implements OnInit {
  questionSelected: string;
  @Input() itemsList1: Answer[]; 

  constructor(private myInputService:Q1Service) {}

  ngOnInit() {
    console.log("constructor");
    console.log(this.itemsList1)
  }
  
  onItemChange(item) {
    console.log(item)
    this.myInputService.notifyParent(this.questionSelected);
  }
}
