import {Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
  <h1>h1 -- Are You Safe Online? </h1>
  <div class="tiny_dancer">Page 1 of 4</div>

  <h2> h2 -- Question 1</h2>
  <h3> How often will your bank?</h3>
  <h4>Thanks for taking our quiz</h4>
  <div class="fancy_big">Fancy Pants!</div>
  <div class="fancy">B is correct!</div>
    `,
  styleUrls: ['./app.component.css']
})
export class TestComponent implements OnInit {

  ngOnInit() {
  }
}