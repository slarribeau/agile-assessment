import { Component } from '@angular/core';
import {MasterService} from './services/master.service'
import {Q1Service} from './services/q1.service'
import {Q2Service} from './services/q2.service'
import {Q3Service} from './services/q3.service'


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
  questionOneIndex = "uninit";
  questionTwoIndex = "uninit";
  questionThreeIndex = "uninit";

//  constructor(private router: Router) {

  constructor(private myInputService:MasterService, 
              private myInputService1:Q1Service, 
              private myInputService2:Q2Service, 
              private myInputService3:Q3Service, 
              private router: Router) {
    myInputService.child$.subscribe(
      event => {
        console.log("parent just got: " + event);
        this.levelIndex=event;
      });
      myInputService1.child$.subscribe(
        event => {
          console.log("parent2 just got: " + event);
          this.questionOneIndex=event;
        });
      myInputService2.child$.subscribe(
          event => {
            console.log("parent2 just got: " + event);
            this.questionTwoIndex=event;
          });
      myInputService3.child$.subscribe(
            event => {
              console.log("parent3 just got: " + event);
              this.questionThreeIndex=event;
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
