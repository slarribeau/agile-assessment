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
  cicdText:string;
  cicdQuestion:string;

  constructor(){
    this.passText = "Good job! Drop us an email at slarribeau@solutionsati.com to exchange ideas about getting even better at this topic.";
    
    this.cicdText = "Having a Continuous Integration / Continuous Delivery (CI/CD) platform that is robust enough to support multiple daily deployments brings the following benefits to the engineering team:<br><br>&nbsp;&nbsp;&nbsp;o <b>Higher Value Testing</b> -- Testing efforts can be focused on higher value testing (e.g. Security, Performance) than regression testing. Once the regression testing is automated, quality experts are free to concentrate on higher value add testing. <br><br>&nbsp;&nbsp;&nbsp;o <b>Increased Code Quality</b> -- When regression testing is automated it de-risks refactoring projects. This is because regression tests can be easily run as a refactoring project is in progress to find unintended consequences.<br><br>&nbsp;&nbsp;&nbsp;o <b>Simpler Debugging</b> -- Small checkins that are quickly deployed simplify debugging. Debugging a reverted checkin that is only a 10 lines change you did that morning is very different then debugging a 1000 line checkin that was worked on over a 2 month period.<br><br>Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area."

    this.cicdQuestion = "Many organizations do not want to deploy software daily. Their customers aren\'t comfortable with it. However, having an environment that could theoretically deploy multible times a day is still beneficial. It shows that a high degree of automation has been developed. <br><br>How often could you deploy software today if your customer allowed it?"
    
    this.q1=
    {
      level: 'lt.year.lt.25',
      passText:'You pretty much rock -- not sure we can help',
      failText:'You so need us!',
      totalPoints:45,
      questions:
      [
        {
          question:'Do your user stories deliver functionality in <a href="https://en.wikipedia.org/wiki/Vertical_slice" target="_blank">\'vertically sliced\'</a> increments?',
          passText:this.passText,
          failText:'Vertical slices allow you to split up projects into small work increments that stakeholders (including customers) can see and give feedback on. The slices may not be complete enough for production, but the feedback and transparency are invaluable. <br><br> Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area.',
          points:15,
          correctAnswer:'C',
          answers: [
            {
              name:'The product that we deliver does not lend itself to delivering vertical slices.',
              value:'A'
            },
            {
              name:'I\'m still not quite sure what a vertical slice is.',
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
              name:'The structure of our organization makes delivery of vertical slices difficult.',
              value:'E'
            },
          ],
        },
        {
          question:'How long is delay between development and formal testing of a feature? ',
          passText:this.passText,
          failText:'The goal is to make the gap as small as possible between development and formal testing of a feature:<br><br>&nbsp;&nbsp;&nbsp;o <b>Speeds resolution</b> -- The shorter the gap the more fresh the logic is in the developers mind.<br><br>&nbsp;&nbsp;&nbsp;o <b>Reduction of developer context-switch costs</b> -- Giving feedback on the feature before work starts on the next feature reduces this overhead.<br><br>&nbsp;&nbsp;&nbsp;o <b>Richer interactions between tester and developer</b> -- Immediate feedback is kind of fun to receive compared to getting \'interrupted\' while working on the next feature.<br><br>Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area.',
          points:15,
          correctAnswer:'A',
          answers: [
            {
              name:'Zero to two days.',
              value:'A'
            },
            {
              name:'One week.',
              value:'B'
            },
            {
              name:'Two weeks.',
              value:'C'
            },
            {
              name:'One Month.',
              value:'D'
            },
            {
              name:'One Quarter.',
              value:'E'
            }
          ],
        },
        {
          question:'How many days are spent coding a typical user story?',
          passText:this.passText,
          failText:'There are many benefits to having user stories that can be coded in one to three days:<br><br>&nbsp;&nbsp;&nbsp;o <b>Easier to estimate</b> -- This is because the granularity is smaller. This allows the estimators to think deeper about what it would take to do the actual implementation.<br><br>&nbsp;&nbsp;&nbsp;o <b>Reduces ambiguity</b> -- Short stories bring clarity since the domain that is being described is smaller. Ambiguous user stories slow down developer flow when they either have to research the correct answer.<br><br>&nbsp;&nbsp;&nbsp;o <b>Simplifies testing</b> -- Shorter stories do fewer things. Its easier to document input, outputs and expected behavior. There are also fewer test cases with smaller stories, so there is less work for testing.<br><br>&nbsp;&nbsp;&nbsp;o <b>Feels good</b> -- Knocking out a story the same day you start it is satisfying. Correspondingly, a four week story feels like a very long march. <br><br>Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area.',
          points:15,
          correctAnswer:'B',
          answers: [
            {
              name:'There is a wide variance. Some can be coded in one day and some take more than four weeks',
              value:'A'
            },
            {
                name:'Most user stories can be coded in one to three days.',
                value:'B'
            },
            {
                name:'Coding a user story rarely exceeds one week',
                value:'C'
            },
            {
              name:'Coding a user story rarely exceeds two weeks',
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
          failText:'Agile is a big change for a waterall team. There will be added confusion if only some of the team is trained. Training across the entire team is critical.<br><br>>&nbsp;&nbsp;&nbsp;o <b>Team Building</b> --  Training performed as a group is ideal, which can double as a team building exercise. <br><br> >&nbsp;&nbsp;&nbsp;o <b>Stakeholders</b> -- Consider including stakeholders in the training. It is a great way to reduce mis-understandings as you proceed in your transition.<br><br>Please contact slarribeau@solutionsati.com for more ideas on the best way to get your team(s) trained.',
          points:15,
          correctAnswer:'D',
          answers: [
            {
              name:'None',
              value:'A'
            },
            {
              name:'The Product Owners, Scrum Masters, and Developers all received Agile training',
              value:'B'
            },
            {
              name:'The Product Owners, Scrum Masters and Development Leads received Agile training',

              value:'C'
            },
            {
              name:'The Product Owners, Scrum Masters, Developers and Stakeholders all received Agile training.',
              value:'D'
            },
          ],
        },

        {
          question:'Are your Scrum teams cross-functional?',
          passText:this.passText,
          failText:'Cross-functional teams benefit from the following: <br><br>&nbsp;&nbsp;&nbsp;o <b>Speed Of Experimentation</b> -- Having all the skills needed to develop features on a scrum team allows them to quickly build experiments. This in turn speed up the discovery process for good ideas.<br><br>&nbsp;&nbsp;&nbsp;o <b>Efficient Communications</b> -- The team can share information in their daily standups without the overhead of communicating through scrum of scrums or some other cross scrum team coordination mechanism.<br><br>&nbsp;&nbsp;&nbsp;o <b>Cross Training</b> -- Having team members that are cross trained provides flexibility. A team member can take over for an absent colleague or can assist when one is behind. It also reduces bottle necks internal to the team iteslf<br><br>&nbsp;&nbsp;&nbsp;o <b>Autonomy</b> -- The cross-functional team can organize itself to meet the best way that they see fit. This unchains a lot of collective intelligence that exists on the team. Compare this to a highly silo\'d project where each team only sees a little bit of the project. <br><br>Please contact slarribeau@solutionsati.com for more ideas on this topic',
          points:15,
          correctAnswer:'E',
          answers: [
            {
              name:'Stories can be completed without help from outside the team. There is little cross training among team members',
              value:'A'
            },
            {
              name:'A significant portion of what is needed to complete stories exists outside of the team.',
              value:'B'
            },
            {
              name:'A small portion of what is needed to complete stories exists outside of the team',
              value:'C'
            },
            {
              name:'Stories can be completed without help from outside of the team and there is some cross training of the necessary skills.',
              value:'D'
            },
            {
              name:'Stories can be completed without help from outside of the team and most of the team is cross trained.',
              value:'E'
            }
          ],
        },
        {
          question:'How much time are Scrum team members spending on their Scrum team assignments?',
          passText:this.passText,
          failText:'It is common to see new Scrum teams struggle to build momentum in larger organizations. This is often attributed to the following factors:<br><br>&nbsp;&nbsp;&nbsp;o <b>Double Booking</b> -- Team members may have other formal responsibilities besides being a member of the Scrum team.<br><br>&nbsp;&nbsp;&nbsp;o <b>High priority borrowing</b> -- Issues may arise that the Scrum team member has experience in resolving. This can be hard for all parties to resist if its a crisis.<br><br>&nbsp;&nbsp;&nbsp;o <b>Informal Responsibilities</b> -- Team members have lots of informal responsibilities in addition to their formal job description. This comes from expertise built up in previous roles in the company. They may be asked for advice on a problem, or to make a "small" fix in a module they originally wrote. These small interruptions add up.<br><br>Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area.<br>',
          points:15,
          correctAnswer:'D',
          answers: [
            {
                name:'Less than 1/4 of their time.',
                value:'A'
            },
            {
                name:'1/4 to 1/2 of their time.',
                value:'B'
            },
            {
              name:'1/2 to 3/4 of their time.',
              value:'C'
            },
            {
              name:'3/4 of their time or more.',
              value:'D'
            },
            {
              name:'There is a big variance. Some sprints it\'s 100% and on some sprints, team members are completely un-available',
              value:'E'
            },
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
          question:this.cicdQuestion,
          passText:this.passText,
          failText:this.cicdText,
          points:15,
          correctAnswer:'D',
          answers: [
            {
              name:'Monthly.',
              value:'A'
            },
            {
              name:'Weekly.',
              value:'B'
            },
            {
              name:'Daily.',
              value:'C'
            },
            {
              name:'Multiple times a day.',
              value:'D'
            }
          ],
        },
        {
          question:'We use Test Driven Development (TDD) in the following manner:',
          passText:this.passText,
          failText:'Test Driven Development brings the following benefits to a company:<br><br>&nbsp;&nbsp;&nbsp;o <b>Improved Design</b> -- TDD requires you to think about the problem before you start coding the actual implementation. Many ambiguities in a user story will be quickly flushed out in this process. <br><br>&nbsp;&nbsp;&nbsp;o <b>Improved Testablility of Code</b> -- TDD has the effect of directing you to write testable code. If you write code first and unit code as a secondary activity, you may find that certain aspects can\'t be tested. With TDD you write the test code first and then the actual code. This reversal sharply increases the testability of the code you write.<br><br>&nbsp;&nbsp;&nbsp;o <b>Confidence To Refactor</b> -- If someone has an idea on how to improve a piece of existing code, how do they make sure they haven\'t broken anything? With TDD its easy, you run the tests before and after your change and ensure that you haven\'t introduced a regression.<br><br>&nbsp;&nbsp;&nbsp;o <b>Frees Testing Resources For Higher Value Work</b> -- If developers can validate their own code to a high degree, then resources that would normally be doing basic functional testing can be assigned to testing performance, scaling and or security.<br><br>Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area.',
          points:15,
          correctAnswer:'E',
          answers: [
            {
              name:'None of our developers use TDD',
              value:'A'
            },
            {
              name:'Some of our developers use TDD.',
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
          failText:'.Retrospectives are an opportunity for the team to influence its own outcomes. There are times where business needs require the team to add an extra story to the sprint. This can\'t really be controlled. However, when the sprint is complete and you sit down as a group, this is the teams chance to express their ideas on how to improve. Talking and brainstorming is great, but working to actually implement ideas from the retrospective is where you really get the benefit.<br><br>Please contact slarribeau@solutionsati.com for more ideas on the best way to get your team(s) trained.!',
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
          question:this.cicdQuestion,
          passText:this.passText,
          failText:this.cicdText,
          points:15,
          correctAnswer:'D',
          answers: [
            {
              name:'Monthly.',
              value:'A'
            },
            {
              name:'Weekly.',
              value:'B'
            },
            {
              name:'Daily.',
              value:'C'
            },
            {
              name:'Multiple times a day.',
              value:'D'
            }
          ],
        },
        {
          question:'Is Agile being used effectively in your organization?',
          passText:this.passText,
          failText:'Agile concepts are not complicated or long. However a lot of thought went into it. All organizations need to make small tweaks to Agile, that is what lets it breathe. But if your tweaks start to get bigger, beware, you start to clip the potential benefits that Agile can bring to your organization.<br>Examine the knowledge level of senior management If you have more than one box checked in this section. This may be a situation where their deeper understanding of how Agile works and its benefits will aide the organization.<br>Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area.',
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
          failText:'Below are a list of patterns that commonly cause blocking. Pinpointing the one(s) that impact your organization is the first step to reducing blocking.<br>- Different sprint lengths -- Coordinating between Scrum teams is complicated when they have different sprint lengths.<br>- Integration of waterfall and Agile -- Agile teams can share early "working-software" versions with each other. But sharing with a team that delivers at the end of the schedule brings special challenges.<br>- Not enough Subject Matter Experts (SME) - SMEs often need to be shared between Scrum teams. This can cause blocking if their allocation can\'t be leveled between the teams.<br>Please contact slarribeau@solutionsati.com for more ideas on how to improve in this area.',
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
