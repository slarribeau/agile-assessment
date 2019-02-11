import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {C2pInputService} from '../services/c2p-input.service'

import { Item } from './item';
import { ITEMS } from './mock-data';


@Component({
  selector: 'app-main-question',
  template: `
    <p>
      Main Question!
    </p>
  <h4>Selected value is {{radioSel.name}}</h4>

  <div>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of itemsList">
        <input type="radio" [(ngModel)]="radioSelected" name="list_name" value="{{item.value}}" (change)="onItemChange(item)" />
        {{item.name}}

      </li>
    </ul>
  </div>
  <!--  <input type="radio" name="x" onclick="check(this.value)" value="Internet Explorer">Internet Explorer<br>
  -->
  <h5>{{radioSelectedString}}</h5>
  `,
  styles: []
})
export class MainQuestionComponent implements OnInit {
  ngOnInit() {
  }

  radioSel: any;
  radioSelected: string;
  radioSelectedString: string;
  itemsList: Item[] = ITEMS;

  @Output() public childEvent = new EventEmitter();


  constructor(private myInputService:C2pInputService) {
    this.itemsList = ITEMS;
    //Selecting Default Radio item here
    this.radioSelected = "item_3";
    this.getSelecteditem();
  }

  // Get row item from array  
  getSelecteditem() {
    this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }
  // Radio Change Event
  onItemChange(item) {
    console.log(item)
    this.getSelecteditem();
    console.log("about to emit from main component to parent")
    this.childEvent.emit("scott");
    this.myInputService.notifyParent(this.radioSelected);
  }

}
