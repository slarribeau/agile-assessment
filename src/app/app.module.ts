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

import {q1LTyearGT25Component} from './questions/q1.lt.year.gt.25.component';
import {q2LTyearGT25Component} from './questions/q2.lt.year.gt.25.component';
import {q3LTyearGT25Component} from './questions/q3.lt.year.gt.25.component';
import {q1GTyearGT25Component} from './questions/q1.gt.year.gt.25.component';
import {q2GTyearGT25Component} from './questions/q2.gt.year.gt.25.component';
import {q3GTyearGT25Component} from './questions/q3.gt.year.gt.25.component';

import {MainQuestionComponent} from './questions/main.component';
import {Q1Component} from './questions/q1.component';
import {AnswerComponent} from './answer.component';

import {MasterService} from './services/master.service'
import {Q1Service} from './services/q1.service'
import {Q2Service} from './services/q2.service'
import {Q3Service} from './services/q3.service'
import {QuestionDBService} from './services/questionDB.service'
import {TestComponent} from './test.component';

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

    q1LTyearGT25Component,
    q2LTyearGT25Component,
    q3LTyearGT25Component,
    q1GTyearGT25Component,
    q2GTyearGT25Component,
    q3GTyearGT25Component,
    MainQuestionComponent,

    Q1Component,
    AnswerComponent,
    TestComponent
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
