import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {q1LTyearLT25Component} from './questions/q1.lt.year.lt.25.component';
import {q2LTyearLT25Component} from './questions/q2.lt.year.lt.25.component';
import {q3LTyearLT25Component} from './questions/q3.lt.year.lt.25.component';
import {q1GTyearLT25Component} from './questions/q1.gt.year.lt.25.component';
import {q2GTyearLT25Component} from './questions/q2.gt.year.lt.25.component';
import {q3GTyearLT25Component} from './questions/q3.gt.year.lt.25.component';
import {MainQuestionComponent} from './questions/main.component';
import {Test3Component} from './test3/test3.component'
import {C2pInputService} from './services/c2p-input.service'
import {C2p2InputService} from './services/c2p2-input.service'


@NgModule({
  declarations: [
    AppComponent,
    q1LTyearLT25Component,
    q2LTyearLT25Component,
    q3LTyearLT25Component,
    q1GTyearLT25Component,
    q2GTyearLT25Component,
    q3GTyearLT25Component,
    MainQuestionComponent,
    Test3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [C2pInputService, C2p2InputService],
  bootstrap: [AppComponent]
})
export class AppModule { }
