import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import {Q1Service} from '../services/q1.service'




export const ITEMS: Item[] = [
  {
      name:'Are you a boy?',
      value:'q0'
  },
  {
      name:'chili?',
      value:'q1'
  },
  {
      name:'russian Food!',
      value:'q2'
  },
];
@Component({
  selector: 'app-q1LTyearLT25',
  template: `
    <p>
      Q1 (less than year && less than 25)!
    </p>
    <div>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of itemsList">
        <input type="radio" [(ngModel)]="radioSelected" name="list_name" value="{{item.value}}" (change)="onItemChange(item)" />
        {{item.name}}
      </li>
    </ul>
  </div>
  `,
  styles: []
})
export class q1LTyearLT25Component implements OnInit {
  itemsList: Item[] = ITEMS;
  radioSel: any;
  radioSelected: string;
  radioSelectedString: string;
  constructor(private myInputService:Q1Service) {
    this.itemsList = ITEMS;
    //Selecting Default Radio item here
    this.radioSelected = "item_3";
  }

  ngOnInit() {
  }
  // Radio Change Event
  onItemChange(item) {
    console.log(item)
    //console.log("about to emit from main component to parent")
   // this.childEvent.emit("scott");
    this.myInputService.notifyParent(this.radioSelected);
  }
}
