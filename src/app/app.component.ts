import { Component } from '@angular/core';
import {C2pInputService} from './services/c2p-input.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myInputService:C2pInputService) {
    myInputService.child$.subscribe(
      event => {
        console.log("parent just got: " + event);
      });
  }
  
  title = 'survey';

  processChildEvent(str) {
    console.log("processChildEvent")
    console.log(str)
  }
}
