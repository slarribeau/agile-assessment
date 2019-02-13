import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import {Q2Service} from '../services/q2.service'

@Component({
  selector: 'app-q2',
  template: `
    <p>
      Q2!
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

export class Q2Component implements OnInit {
  questionSelected: string;
  @Input() itemsList2: Item[]; 

  constructor(private myInputService:Q2Service) {}

  ngOnInit() {
    console.log("constructor");
    console.log(this.itemsList2)
  }
  
  onItemChange(item) {
    console.log(item)
    this.myInputService.notifyParent(this.questionSelected);
  }
}
