import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <p>
      Q2 (less than year && less than 25)!
    </p>
  `,
  styles: []
})
export class q2LTyearLT25Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
