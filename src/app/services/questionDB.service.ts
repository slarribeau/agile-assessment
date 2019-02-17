import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Answer, Question, QuestionSet } from '../questions/item';

@Injectable()
export class QuestionDBService {
  getQuestionSet(level:string){
    if (level=="LTyearLT25") {
      return this.q1;
    }

    if (level=="GTyearLT25") {
      return this.q1;
    }

    if (level=="LTyearGT25") {
      return this.q3;
    }

    if (level=="GTyearGT25") {
      return this.q4;
    }
  }
  q1: QuestionSet;
  q2: QuestionSet;
  q3: QuestionSet;
  q4: QuestionSet;

  constructor(){
  
    this.q1=
    {
      level: 'lt.year.lt.25',
      passText:'You pretty much rock -- not sure we can help',
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'Do your user stories deliver functionality in \'vertically sliced\' increments?',
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
              name:'I\'m not quite sure what a vertical slice is.',
              value:'1'
            },
            {
              name:'We usually deliver vertical slices.',
              value:'2'
            },
            {
              name:'We sometimes deliver vertical slices.',
              value:'3'
            },
            {
              name:'The structure of our organization does not allow us to deliver vertical slices.',
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
  

    this.q2=
    {
      level: 'gt.year.lt.25',
      passText:'You pretty much rock -- not sure we can help',
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'Do your user stories deliver functionality in \'vertically sliced\' increments?',
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
              name:'I\'m not quite sure what a vertical slice is.',
              value:'1'
            },
            {
              name:'We usually deliver vertical slices.',
              value:'2'
            },
            {
              name:'We sometimes deliver vertical slices.',
              value:'3'
            },
            {
              name:'The structure of our organization does not allow us to deliver vertical slices.',
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

    this.q3=
    {
      level: 'lt.year.gt.25',
      passText:'You pretty much rock -- not sure we can help',
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'Do your user stories deliver functionality in \'vertically sliced\' increments?',
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
              name:'I\'m not quite sure what a vertical slice is.',
              value:'1'
            },
            {
              name:'We usually deliver vertical slices.',
              value:'2'
            },
            {
              name:'We sometimes deliver vertical slices.',
              value:'3'
            },
            {
              name:'The structure of our organization does not allow us to deliver vertical slices.',
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

    this.q4=
    {
      level: 'gt.year.gt.25',
      passText:'You pretty much rock -- not sure we can help',
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'How often do you deploy software?',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'4',
          answers: [
            {
              name:'We have the infrastructure in place where we could deploy quarterly.',
              value:'0'
            },
            {
              name:'We have the infrastructure in place where we could deploy monthly',
              value:'1'
            },
            {
              name:'We have the infrastructure in place where we could deploy weekly.',
              value:'2'
            },
            {
              name:'We have the infrastructure in place where we could deploy daily.',
              value:'3'
            },
            {
              name:'We have the infrastructure in place where we could deploy multiple times a day.',
              value:'4'
            },
          ],
        },
        {
          question:'Is Agile being used effectively in your organization?',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'0',
          answers: [
            {
              name:'Tampering -- Agile processes are only used when its convenient. When the organization is under stress, it often falls back to the incumbent ways of operating.',
              value:'0'
            },
            {
              name:'Micro management -- Organization is not comfortable with self-directed teams. There is a tendency to dictate solutions.',
              value:'1'
            },
            {
              name:'Loss of checks and balances -- Product Owner and Scrum Master role are combined into one role.',
              value:'2'
            },
            {
              name:'Product vision is unclear -- Not enough time is spent communicating to the Scrum teams the future direction and goals of the product.',
              value:'3'
            },
            {
              name:'None of the above',
              value:'4'
            },
          ],
        },
        {
          question:'The Agile teams in our organization are \'________\' blocked.',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'1',
          answers: [
            {
              name:'\'Constantly\' - Every sprint there is a delay in a story because of something needed from another team.',
              value:'0'
            },
            {
                name:'\'Usually\' - Not every sprint experiences blocking, but most do.',
                value:'1'
            },
            {
                name:'\'Sometimes\' - We have made good progress on making our teams autonomous but still see blocking from time to time.',
                value:'2'
            },
            {
              name:'\'Rarely\' - We have found a way to make our teams autonomous and they rarely are blocked.',
              value:'3'
            }
          ],
        }
      ]
    }    


  }
}
