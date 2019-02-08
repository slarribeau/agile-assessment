import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {q1LTyearLT25Component} from './questions/q1.lt.year.lt.25.component';
import {q2LTyearLT25Component} from './questions/q2.lt.year.lt.25.component';
import {q3LTyearLT25Component} from '././questions/q3.lt.year.lt.25.component';
import {MainQuestionComponent} from './questions/main.component';
import {Test3Component} from './test3/test3.component'

@NgModule({
  declarations: [
    AppComponent,
    q1LTyearLT25Component,
    q2LTyearLT25Component,
    q3LTyearLT25Component,
    MainQuestionComponent,
    Test3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
