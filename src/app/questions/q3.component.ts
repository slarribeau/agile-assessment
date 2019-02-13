import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import {Q3Service} from '../services/q3.service'

@Component({
  selector: 'app-q3',
  template: `
    <p>
      Q3!
    </p>
    <div>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of itemsList3">
        <input type="radio" [(ngModel)]="questionSelected" name="list_name" value="{{item.value}}" (change)="onItemChange(item)" />
        {{item.name}}
      </li>
    </ul>
  </div>
  `,
  styles: []
})

export class Q3Component implements OnInit {
  questionSelected: string;
  @Input() itemsList3: Item[]; 

  constructor(private myInputService:Q3Service) {}

  ngOnInit() {
    console.log("constructor");
    console.log(this.itemsList3)
  }
  
  onItemChange(item) {
    console.log(item)
    this.myInputService.notifyParent(this.questionSelected);
  }
}
