import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Answer, Question, QuestionSet } from '../questions/item';

@Injectable()
export class QuestionDBService {
  getQuestionSet(level:string){
    console.log("getQuestionSet " + level)
    if (level=="lt.year.lt.25") {
      return this.q1;
    }

    if (level=="lt.year.gt.25") {
      return this.q2;
    }

    if (level=="gt.year.lt.25") {
      return this.q3;
    }

    if (level=="gt.year.gt.25") {
      return this.q4;
    }
    console.log("Oops -- should not get here")
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
      level: 'lt.year.gt.25',
      passText:'You pretty much rock -- not sure we can help',
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'How much formal Agile training has your team received?',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'4',
          answers: [
            {
              name:'None',
              value:'0'
            },
            {
              name:'The Product Owners and Scrum Masters received formal training, but not the Developers and Stakeholders.',
              value:'1'
            },
            {
              name:'The Product Owners, Scrum Masters and Developers received training, but not the Stakeholders.',

              value:'2'
            },
            {
              name:'The Product Owners, Scrum Masters, Developers received training, but not the Stakeholders.',
              value:'3'
            },
            {
              name:'The Product Owners, Scrum Masters, Developers and Stakeholders all received formal Agile training.',
              value:'4'
            },
          ],
        },
        {
          question:'Are your Scrum teams cross-functional?',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'4',
          answers: [
            {
              name:'A significant portion of what is needed to get the stories to done exists outside of the team.',
              value:'0'
            },
            {
              name:'Some of the skills necessary to get the stories to done exists outside of the team.',

              value:'1'
            },
            {
              name:'All of the necessary skills for performing the work exist on the team.',
              value:'2'
            },
            {
              name:'All of the necessary skills for performing the work exist on the team and there is some cross training of skills.',
              value:'3'
            },
            {
              name:'All of the necessary skills for performing the work exist on the team and most of the team is cross trained on most of those skills.',
              value:'4'
            }
          ],
        },
        {
          question:'How much time are Scrum team members spending on their Scrum team assignments?',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'1',
          answers: [
            {
              name:'Its all over the map. Some sprints its 100% and some sprints team members are completely un-available',

              value:'0'
            },
            {
                name:'Less than 1/4 of their time.',
                value:'1'
            },
            {
                name:'1/4 to 1/2 of their time.',
                value:'2'
            },
            {
              name:'1/2 to 3/4 of their time.',
              value:'3'
            },
            {
              name:'3/4 of their time or more.',
              value:'4'
            }
          ],
        }
      ]
    }

    this.q3=
    {
      level: 'gt.year.lt.25',
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
          correctAnswer:'2',
          answers: [
            {
              name:'We have the infrastructure in place where we could deploy quarterly.',
              value:'0'
            },
            {
              name:'We have the infrastructure in place where we could deploy weekly',
              value:'1'
            },
            {
              name:'We have the infrastructure in place where we could deploy daily.',
              value:'2'
            },
            {
              name:'We have the infrastructure in place where we could deploy multiple times a day.',
              value:'3'
            }
          ],
        },
        {
          question:'We use Test Driven Development (TDD) in the following manner:',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'4',
          answers: [
            {
              name:'What\'s TDD?',
              value:'0'
            },
            {
              name:'Have heard of it most of us don\'t use it.',
              value:'1'
            },
            {
              name:'About half of our developers use it.',
              value:'2'
            },
            {
              name:'Its expected that all of our developers use TDD.',
              value:'3'
            },
            {
              name:'Its expected that all of our developers use TDD. Most use mocks and stubs as well.',
              value:'4'
            }
          ],
        },
        {
          question:'The most recent problem that we identified in a sprint retrospective and solved was \'__________\':',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'3',
          answers: [
            {
              name:'Never. We don\'t have sprint retrospectives.',
              value:'0'
            },
            {
                name:'We bring up lots of problems in retrospectives, but I can\'t remember the last one we solved.',
                value:'1'
            },
            {
                name:'Two-Three sprints ago.',
                value:'2'
            },
            {
              name:'Last sprint. We regularly discover new problems in our retrospective and actions are taken to quickly implement proposed solutions.',
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
