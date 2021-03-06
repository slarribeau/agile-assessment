import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class Q3Service {
  constructor() { }

  // Observable source
  private childSource = new Subject<string>();

  // Observable stream
  child$ = this.childSource.asObservable();

  notifyParent(eventName) {
    this.childSource.next(eventName);
  }

}
