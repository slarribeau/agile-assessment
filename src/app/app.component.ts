import { Component } from '@angular/core';
import {MasterService} from './services/master.service'
import {Q1Service} from './services/q1.service'

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
  questionIndex = "uninit";
//  constructor(private router: Router) {

  constructor(private myInputService:MasterService, 
              private myInputService2:Q1Service, 
              private router: Router) {
    myInputService.child$.subscribe(
      event => {
        console.log("parent just got: " + event);
        this.levelIndex=event;
      });
      myInputService2.child$.subscribe(
        event => {
          console.log("parent2 just got: " + event);
          this.questionIndex=event;
        });
  }
  prevButton() {alert(this.router.url)}
  nextButton() {
    if (this.router.url == "/") {
      if (this.levelIndex == "lt.year.lt.25") {
        this.router.navigateByUrl("/q1ltyearlt25");
      } else {
        this.router.navigateByUrl("/q1gtyearlt25");
      }
    } else if (this.router.url == "/q1ltyearlt25") {
      this.router.navigateByUrl("/q2ltyearlt25");
    } else if (this.router.url == "/q2ltyearlt25") {
      this.router.navigateByUrl("/q3ltyearlt25");
    } else if (this.router.url == "/q1gtyearlt25") {
      this.router.navigateByUrl("/q2gtyearlt25");
    } else if (this.router.url == "/q2gtyearlt25") {
      this.router.navigateByUrl("/q3gtyearlt25");
    }
  }
}
