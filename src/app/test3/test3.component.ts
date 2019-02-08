import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test3',
  template: `
    <h1>Answer these questions</h1>
    <form>
    <input type="radio" name="gender" value="male" checked> Male<br>
    <input type="radio" name="gender" value="female"> Female<br>
    <input type="radio" name="gender" value="other"> Other  
  </form> 
  <button  (click)="nextQuestion()">Next</button>

  `,
  styles: []
})
export class Test3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nextQuestion() {
    //this.router.navigateByUrl("/");
    console.log("click!")
  }
}
