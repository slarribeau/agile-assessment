export class Answer{
    name:string;
    value:string;
  }
  export class Question {
    question:string;
    passText:string;
    failText:string;
    points:number;
    correctAnswer:string;
    answers: Answer[];
  }
  export class QuestionSet {
    level:string;
    passText:string;
    failText:string;
    totalPoints:number;
    questions:Question[];
  }