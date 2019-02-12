import { Component, OnInit } from '@angular/core';
import { Item } from './item';



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
  constructor() {
    this.itemsList = ITEMS;
   }

  ngOnInit() {
  }

}
