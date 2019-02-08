import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <p>
      Q1 (less than year && less than 25)!
    </p>
  `,
  styles: []
})
export class q1LTyearLT25Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
