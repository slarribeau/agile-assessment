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
  passText:string;

  constructor(){
    this.passText = "Good job! Drop us an email at agileTeam@solutionsati.com to exchange ideas about getting even better at this topic.";
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
          passText:this.passText,
          failText:'Vertical slices allow you to split up projects into small work increments that the stakeholders (including customers) can see and give feedback on. The slices may not be complete enough for production, but the feedback and transparency are invaluable. <br><br> You get the added benefits of: <br>- Your team becoming autonomous -- You may find that to deliver vertical slices, you have to change the staffing of your scrum team(s) so that you have the necessary skills to change each layer of the stack.<br>- You can turn things around to user quickly and incorporate feedback -- Delivering vertical slice increments within the scrum team reduces inter-team dependencies, which reduces delay.<br><br>Please contact agileTeam@solutionsati.com for more ideas on how to improve in this area.',
          points:15,
          correctAnswer:'C',
          answers: [
            {
              name:'The product that we deliver does not lend itself to delivering vertical slices.',
              value:'A'
            },
            {
              name:'I\'m not quite sure what a vertical slice is.',
              value:'B'
            },
            {
              name:'We usually deliver vertical slices.',
              value:'C'
            },
            {
              name:'We sometimes deliver vertical slices.',
              value:'D'
            },
            {
              name:'The structure of our organization does not allow us to deliver vertical slices.',
              value:'E'
            },
          ],
        },
        {
          question:'How long is delay between development and formal testing of a feature? ',
          passText:this.passText,
          failText:'There are many benefits to having no gap between testing and development:<br><br>- The logic is fresh in the developers mind<br>- Less likely to have developer context switch between previous and current task<br>-Richer interactions between tester and developer<br><br>Please contact agileTeam@solutionsati.com for more ideas on how to improve in this area.',
          points:15,
          correctAnswer:'A',
          answers: [
            {
              name:'None -- We either have developers test their own code or formal testing starts the day the feature is completed.',
              value:'A'
            },
            {
              name:'We deploy quarterly. A feature that is complete on Jan 15 may not get tested until end of March.',
              value:'B'
            },
            {
              name:'Not more than 2 weeks.',
              value:'C'
            },
            {
              name:'Not more than 8 weeks.',
              value:'D'
            },
            {
              name:'Not more than 4 weeks.',
              value:'E'
            }
          ],
        },
        {
          question:'How many days are spent coding a typical user story?',
          passText:this.passText,
          failText:'There are many benefits to having user stories that can be coded in one-three days:<br><br>- Easier to estimate -- This is because the granularity is smaller. This allows the estimators to think deeper about what it would take to do the actual implementation, raising the quality of the estimate.<br>- Less ambiguity -- Short stories bring clarity since the domain that is being described is smaller. There is a great savings here in time. Ambiguous user stories slow down developer flow as they either have to stop and research the correct answer, or take a chance and take the risk of re-work if the wrong choice was selected.<br>- Easier to test -- Shorter stories do fewer things. Its easier to document input, outputs and expected behavior. There are also fewer test cases with smaller stories, so there is less work for testing.<br>- Feels good when you finish a story shortly after starting it -- Correspondingly, a four week story feels like a long march. It can really build a teams morale to see someone\'s story submitted every day and have testing start on that same day.<br><br>Please contact agileTeam@solutionsati.com for more ideas on how to improve in this area.',
          points:15,
          correctAnswer:'B',
          answers: [
            {
              name:'There is a wide variance. Some can be coded in one day and some take more than four weeks',
              value:'A'
            },
            {
                name:'Most stories can be coded in 1-3 days.',
                value:'B'
            },
            {
                name:'Coding a story rarely exceeds one week',
                value:'C'
            },
            {
              name:'Coding a story rarely exceeds two weeks',
              value:'D'
            }
          ],
        }
      ]
    }
  

    this.q2=
    {
      level: 'lt.year.gt.25',
      passText:this.passText,
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'How much formal Agile training has your team received?',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'E',
          answers: [
            {
              name:'None',
              value:'A'
            },
            {
              name:'The Product Owners and Scrum Masters received formal training, but not the Developers and Stakeholders.',
              value:'B'
            },
            {
              name:'The Product Owners, Scrum Masters and Developers received training, but not the Stakeholders.',

              value:'C'
            },
            {
              name:'The Product Owners, Scrum Masters, Developers received training, but not the Stakeholders.',
              value:'D'
            },
            {
              name:'The Product Owners, Scrum Masters, Developers and Stakeholders all received formal Agile training.',
              value:'E'
            },
          ],
        },
        {
          question:'Are your Scrum teams cross-functional?',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'E',
          answers: [
            {
              name:'A significant portion of what is needed to get the stories to done exists outside of the team.',
              value:'A'
            },
            {
              name:'Some of the skills necessary to get the stories to done exists outside of the team.',

              value:'B'
            },
            {
              name:'All of the necessary skills for performing the work exist on the team.',
              value:'C'
            },
            {
              name:'All of the necessary skills for performing the work exist on the team and there is some cross training of skills.',
              value:'D'
            },
            {
              name:'All of the necessary skills for performing the work exist on the team and most of the team is cross trained on most of those skills.',
              value:'E'
            }
          ],
        },
        {
          question:'How much time are Scrum team members spending on their Scrum team assignments?',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'B',
          answers: [
            {
              name:'Its all over the map. Some sprints its 100% and some sprints team members are completely un-available',

              value:'A'
            },
            {
                name:'Less than 1/4 of their time.',
                value:'B'
            },
            {
                name:'1/4 to 1/2 of their time.',
                value:'C'
            },
            {
              name:'1/2 to 3/4 of their time.',
              value:'D'
            },
            {
              name:'3/4 of their time or more.',
              value:'E'
            }
          ],
        }
      ]
    }

    this.q3=
    {
      level: 'gt.year.lt.25',
      passText:this.passText,
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'How often do you deploy software?',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'C',
          answers: [
            {
              name:'We have the infrastructure in place where we could deploy quarterly.',
              value:'A'
            },
            {
              name:'We have the infrastructure in place where we could deploy weekly',
              value:'B'
            },
            {
              name:'We have the infrastructure in place where we could deploy daily.',
              value:'C'
            },
            {
              name:'We have the infrastructure in place where we could deploy multiple times a day.',
              value:'D'
            }
          ],
        },
        {
          question:'We use Test Driven Development (TDD) in the following manner:',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'E',
          answers: [
            {
              name:'What\'s TDD?',
              value:'A'
            },
            {
              name:'Have heard of it most of us don\'t use it.',
              value:'B'
            },
            {
              name:'About half of our developers use it.',
              value:'C'
            },
            {
              name:'Its expected that all of our developers use TDD.',
              value:'D'
            },
            {
              name:'Its expected that all of our developers use TDD. Most use mocks and stubs as well.',
              value:'E'
            }
          ],
        },
        {
          question:'The most recent problem that we identified in a sprint retrospective and solved was \'__________\':',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'D',
          answers: [
            {
              name:'Never. We don\'t have sprint retrospectives.',
              value:'A'
            },
            {
                name:'We bring up lots of problems in retrospectives, but I can\'t remember the last one we solved.',
                value:'B'
            },
            {
                name:'Two-Three sprints ago.',
                value:'C'
            },
            {
              name:'Last sprint. We regularly discover new problems in our retrospective and actions are taken to quickly implement proposed solutions.',
              value:'D'
            }
          ],
        }
      ]
    }

    this.q4=
    {
      level: 'gt.year.gt.25',
      passText:this.passText,
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'How often do you deploy software?',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'E',
          answers: [
            {
              name:'We have the infrastructure in place where we could deploy quarterly.',
              value:'A'
            },
            {
              name:'We have the infrastructure in place where we could deploy monthly',
              value:'B'
            },
            {
              name:'We have the infrastructure in place where we could deploy weekly.',
              value:'C'
            },
            {
              name:'We have the infrastructure in place where we could deploy daily.',
              value:'D'
            },
            {
              name:'We have the infrastructure in place where we could deploy multiple times a day.',
              value:'E'
            },
          ],
        },
        {
          question:'Is Agile being used effectively in your organization?',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'A',
          answers: [
            {
              name:'Tampering -- Agile processes are only used when its convenient. When the organization is under stress, it often falls back to the incumbent ways of operating.',
              value:'A'
            },
            {
              name:'Micro management -- Organization is not comfortable with self-directed teams. There is a tendency to dictate solutions.',
              value:'B'
            },
            {
              name:'Loss of checks and balances -- Product Owner and Scrum Master role are combined into one role.',
              value:'C'
            },
            {
              name:'Product vision is unclear -- Not enough time is spent communicating to the Scrum teams the future direction and goals of the product.',
              value:'D'
            },
            {
              name:'None of the above',
              value:'E'
            },
          ],
        },
        {
          question:'The Agile teams in our organization are \'________\' blocked.',
          passText:this.passText,
          failText:'dude!',
          points:15,
          correctAnswer:'B',
          answers: [
            {
              name:'\'Constantly\' - Every sprint there is a delay in a story because of something needed from another team.',
              value:'A'
            },
            {
                name:'\'Usually\' - Not every sprint experiences blocking, but most do.',
                value:'B'
            },
            {
                name:'\'Sometimes\' - We have made good progress on making our teams autonomous but still see blocking from time to time.',
                value:'C'
            },
            {
              name:'\'Rarely\' - We have found a way to make our teams autonomous and they rarely are blocked.',
              value:'D'
            }
          ],
        }
      ]
    }    


  }
}
