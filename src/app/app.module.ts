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
import {Q1Component} from './questions/q1.component';
import {Q2Component} from './questions/q2.component';
import {Q3Component} from './questions/q3.component';
import {AnswerComponent} from './answer.component';

import {MasterService} from './services/master.service'
import {Q1Service} from './services/q1.service'
import {Q2Service} from './services/q2.service'
import {Q3Service} from './services/q3.service'
import {QuestionDBService} from './services/questionDB.service'

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
    Q1Component,
    Q2Component,
    Q3Component,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [MasterService, Q1Service, Q2Service, Q3Service,QuestionDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
