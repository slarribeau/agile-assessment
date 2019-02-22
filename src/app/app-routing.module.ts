import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainQuestionComponent} from './questions/main.component';
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
import {AnswerComponent} from './answer.component';
import {TestComponent} from './test.component';


export const routes: Routes = [
  { path: 'main', component: MainQuestionComponent},
  { path: 'q1ltyearlt25', component: q1LTyearLT25Component},
  { path: 'q2ltyearlt25', component: q2LTyearLT25Component},
  { path: 'q3ltyearlt25', component: q3LTyearLT25Component},
  { path: 'q1gtyearlt25', component: q1GTyearLT25Component},
  { path: 'q2gtyearlt25', component: q2GTyearLT25Component},
  { path: 'q3gtyearlt25', component: q3GTyearLT25Component},

  { path: 'q1ltyeargt25', component: q1LTyearGT25Component},
  { path: 'q2ltyeargt25', component: q2LTyearGT25Component},
  { path: 'q3ltyeargt25', component: q3LTyearGT25Component},
  { path: 'q1gtyeargt25', component: q1GTyearGT25Component},
  { path: 'q2gtyeargt25', component: q2GTyearGT25Component},
  { path: 'q3gtyeargt25', component: q3GTyearGT25Component},
  { path: 'answer/:level/:answerOne/:answerTwo/:answerThree', component: AnswerComponent},
  { path: 'test', component: TestComponent},
  { path: '**', component: MainQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
