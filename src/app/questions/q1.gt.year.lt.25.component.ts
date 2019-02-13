import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import {C2p2InputService} from '../services/c2p2-input.service'




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
  selector: 'app-q1GTyearLT25',
  template: `
    <p>
      Q1 (greater than year && less than 25)!
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

export class q1GTyearLT25Component implements OnInit {
  itemsList: Item[] = ITEMS;
  radioSel: any;
  radioSelected: string;
  radioSelectedString: string;
  constructor(private myInputService:C2p2InputService) {
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
