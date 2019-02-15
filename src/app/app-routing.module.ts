import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainQuestionComponent} from './questions/main.component';
import {q1LTyearLT25Component} from './questions/q1.lt.year.lt.25.component';
import {q2LTyearLT25Component} from './questions/q2.lt.year.lt.25.component';
import {q3LTyearLT25Component} from './questions/q3.lt.year.lt.25.component';
import {q1GTyearLT25Component} from './questions/q1.gt.year.lt.25.component';
import {q2GTyearLT25Component} from './questions/q2.gt.year.lt.25.component';
import {q3GTyearLT25Component} from './questions/q3.gt.year.lt.25.component';
import {AnswerComponent} from './answer.component';

export const routes: Routes = [
  { path: 'main', component: MainQuestionComponent},
  { path: 'q1ltyearlt25', component: q1LTyearLT25Component},
  { path: 'q2ltyearlt25', component: q2LTyearLT25Component},
  { path: 'q3ltyearlt25', component: q3LTyearLT25Component},
  { path: 'q1gtyearlt25', component: q1GTyearLT25Component},
  { path: 'q2gtyearlt25', component: q2GTyearLT25Component},
  { path: 'q3gtyearlt25', component: q3GTyearLT25Component},
  { path: 'answer/:level/:answerOne/:answerTwo/:answerThree', component: AnswerComponent},

  { path: '**', component: MainQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
