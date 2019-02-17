import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Answer, Question, QuestionSet } from '../questions/item';

@Injectable()
export class QuestionDBService {
  getQuestionSet(level:string){
    return this.myQuestionSet;
  }
  myQuestionSet: QuestionSet;
  constructor(){
  
    this.myQuestionSet=
    {
      level: "gt.year.lt.25",
      passText:"You pretty much rock -- not sure we can help",
      failText:"You so need us!",
      totalPoints:45,
      questions:
      [
        {
          question:"Do your user stories deliver functionality in 'vertically sliced' increments?",
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'2',
          answers: [
            {
              name:'The product that we deliver does not lend itself to delivering vertical slices.',
              value:'0'
            },
            {
              name:"I'm not quite sure what a vertical slice is.",
              value:'1'
            },
            {
              name:'We usually deliver vertical slices.',
              value:'2'
            },
            {
              name:"We sometimes deliver vertical slices.",
              value:'3'
            },
            {
              name:"The structure of our organization does not allow us to deliver vertical slices.",
              value:'4'
            },
          ],
        },
        {
          question:'How long is delay between development and formal testing of a feature? ',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'0',
          answers: [
            {
              name:'None -- We either have developers test their own code or formal testing starts the day the feature is completed.',
              value:'0'
            },
            {
              name:'We deploy quarterly. A feature that is complete on Jan 15 may not get tested until end of March.',
              value:'1'
            },
            {
              name:'Not more than 2 weeks.',
              value:'2'
            },
            {
              name:'Not more than 8 weeks.',
              value:'3'
            },
            {
              name:'Not more than 4 weeks.',
              value:'4'
            }
          ],
        },
        {
          question:'How many days are spent coding a typical user story?',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'1',
          answers: [
            {
              name:'There is a wide variance. Some can be coded in one day and some take more than four weeks',
              value:'0'
            },
            {
                name:'Most stories can be coded in 1-3 days.',
                value:'1'
            },
            {
                name:'Coding a story rarely exceeds one week',
                value:'2'
            },
            {
              name:'Coding a story rarely exceeds two weeks',
              value:'3'
            }
          ],
        }
      ]
    }
  }

}
