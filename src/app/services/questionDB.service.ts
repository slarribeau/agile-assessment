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
          question:'a',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'R3',
          answers: [
            {
              name:'1-You dont care about a',
              value:'R1'
            },
            {
              name:'1-You could take or leave a',
              value:'R2'
            },
            {
              name:'1-a sucks',
              value:'R3'
            }
          ],
        },
        {
          question:'b',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'R3',
          answers: [
            {
              name:'???Are you a BORG?',
              value:'R1'
            },
            {
                name:'???Dominoes?',
                value:'R2'
            },
            {
                name:'???Chinese Food!',
                value:'R3'
            }
          ],
        },
        {
          question:'c',
          passText:'yeah',
          failText:'dude!',
          points:15,
          correctAnswer:'R3',
          answers: [
            {
              name:'???Are you a BORG?',
              value:'R1'
            },
            {
                name:'???Dominoes?',
                value:'R2'
            },
            {
                name:'???Chinese Food!',
                value:'R3'
            }
          ],
        }
      ]
    }
  }

}
