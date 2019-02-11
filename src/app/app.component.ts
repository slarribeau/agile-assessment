import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey';

  processChildEvent(str) {
    console.log("processChildEvent")
    console.log(str)
  }
}
