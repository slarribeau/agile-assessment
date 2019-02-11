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
  nextButton() {
    if (this.router.url == "/") {
      this.router.navigateByUrl("/q1");
    } else if (this.router.url == "/q1") {
      this.router.navigateByUrl("/q2");
    } else if (this.router.url == "/q2") {
      this.router.navigateByUrl("/q3");
    } else if (this.router.url == "/q3") {
      this.router.navigateByUrl("/q4");
    }
  }
}
