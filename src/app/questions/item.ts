export class Item{
    name:string;
    value:string;
  }
  export class Question {
    question:string;
    passText:string;
    failText:string;
    points:number;
    answer:string;
    ITEMS: Item[];
  }
  export class QuestionSet {
    level:string;
    passText:string;
    failText:string;
    totalPoints:number;
    questions:Question[];
  }