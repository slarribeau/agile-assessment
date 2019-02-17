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
          correctAnswer:'A3',
          answers: [
            {
              name:'The product that we deliver does not lend itself to delivering vertical slices.',
              value:'A1'
            },
            {
              name:"I'm not quite sure what a vertical slice is.",
              value:'A2'
            },
            {
              name:'We usually deliver vertical slices.',
              value:'A3'
            },
            {
              name:"We sometimes deliver vertical slices.",
              value:'A4'
            },
            {
              name:"The structure of our organization does not allow us to deliver vertical slices.",
              value:'A5'
            },
          ],
        },
        {
          question:'How long is delay between development and formal testing of a feature? ',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'A1',
          answers: [
            {
              name:'None -- We either have developers test their own code or formal testing starts the day the feature is completed.',
              value:'A1'
            },
            {
              name:'We deploy quarterly. A feature that is complete on Jan 15 may not get tested until end of March.',
              value:'A2'
            },
            {
              name:'Not more than 2 weeks.',
              value:'A3'
            },
            {
              name:'Not more than 8 weeks.',
              value:'A4'
            },
            {
              name:'Not more than 4 weeks.',
              value:'A5'
            }
          ],
        },
        {
          question:'How many days are spent coding a typical user story?',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'A2',
          answers: [
            {
              name:'There is a wide variance. Some can be coded in one day and some take more than four weeks',
              value:'A1'
            },
            {
                name:'Most stories can be coded in 1-3 days.',
                value:'A2'
            },
            {
                name:'Coding a story rarely exceeds one week',
                value:'A3'
            },
            {
              name:'Coding a story rarely exceeds two weeks',
              value:'A4'
            }
          ],
        }
      ]
    }
  }

}
