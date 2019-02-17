import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MasterService} from '../services/master.service'

//import { Item } from './item';
export class Item{
  name:string;
  value:string;
}
import { ITEMS } from './mock-data';
//   <h4>Selected value is {{radioSel.name}}</h4> --


@Component({
  selector: 'app-main-question',
  template: `
    <p>
    Click the button below which best describes your company:
    </p>

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

  //@Output() public childEvent = new EventEmitter();


  constructor(private myInputService:MasterService) {
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
    //console.log("about to emit from main component to parent")
   // this.childEvent.emit("scott");
    this.myInputService.notifyParent(this.radioSelected);
  }

}
