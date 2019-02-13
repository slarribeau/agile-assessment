import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import {Q1Service} from '../services/q1.service'




export const ITEMS: Item[] = [
  {
      name:'Are you a BORG?',
      value:'q0'
  },
  {
      name:'Dominoes?',
      value:'q1'
  },
  {
      name:'Chinese Food!',
      value:'q2'
  },
];

@Component({
  selector: 'app-q1',
  template: `
    <p>
      Q1 (greater than year && less than 25)!
    </p>
    <div>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of itemsList2">
        <input type="radio" [(ngModel)]="questionSelected" name="list_name" value="{{item.value}}" (change)="onItemChange(item)" />
        {{item.name}}
      </li>
    </ul>
  </div>
  `,
  styles: []
})

export class Q1Component implements OnInit {
  itemsList: Item[] = ITEMS;
  //itemsList2: Item[] =[]
  questionSelected: string;
  @Input() itemsList2: Item[]; 

  constructor(private myInputService:Q1Service) {
    this.itemsList = ITEMS;
  }

  ngOnInit() {
    console.log("constructor");
    console.log(this.itemsList2)
  }
  onItemChange(item) {
    console.log(item)
    this.myInputService.notifyParent(this.questionSelected);
  }
}
