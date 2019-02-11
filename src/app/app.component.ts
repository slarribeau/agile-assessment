import { Component } from '@angular/core';
import {C2pInputService} from './services/c2p-input.service'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey';
  levelIndex = "uninit";
  questionIndex = 0;
//  constructor(private router: Router) {

  constructor(private myInputService:C2pInputService, private router: Router) {
    myInputService.child$.subscribe(
      event => {
        console.log("parent just got: " + event);
        this.levelIndex=event;
      });
  }
  prevButton() {alert(this.router.url)}
  nextButton() {alert(this.router.url)}
}
