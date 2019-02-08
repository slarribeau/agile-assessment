import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainQuestionComponent} from './questions/main.component';
import {q1LTyearLT25Component} from './questions/q1.lt.year.lt.25.component';
import {q2LTyearLT25Component} from './questions/q2.lt.year.lt.25.component';
import {q3LTyearLT25Component} from '././questions/q3.lt.year.lt.25.component';
import {Test3Component} from './test3/test3.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'metrics', component: Test3Component},
  { path: 'main', component: MainQuestionComponent},
  { path: 'q1', component: q1LTyearLT25Component},
  { path: 'q2', component: q2LTyearLT25Component},
  { path: 'q3', component: q3LTyearLT25Component},
  { path: '**', component: MainQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
