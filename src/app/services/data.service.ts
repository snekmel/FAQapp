import { Injectable } from '@angular/core';
import {Question } from '../models/Question'

@Injectable()
export class DataService {
questions:Question[];

  constructor() { 
/*
    this.questions = [{
      text:'What is your name?',
      answer:"My name is Lars",
      hide:true
    },
    {
      text:'What is your favourite color?',
      answer:"Green",
      hide:true
    },
    {
      text:'What is your favorite languague?',
      answer:"Javascript",
      hide:true
    }
  ];

  */
  }


  getQuestions(){
    if(localStorage.getItem('questions')=== null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);
    //Local var
    let questions;

    if(localStorage.getItem('questions')=== null){
     questions = [];
     questions.unshift(question);
     localStorage.setItem('questions', JSON.stringify(questions));

    }else{
questions = JSON.parse(localStorage.getItem('questions'));
questions.unshift(question);
this.questions = JSON.parse(localStorage.getItem('questions'));
   

localStorage.setItem('questions',JSON.stringify(questions));
}
  }

  removeQuestion(question:Question){

    console.log(question);
    for (var index = 0; index < this.questions.length; index++) {
    
if(question == this.questions[index]){
this.questions.splice(index, 1);
localStorage.setItem('questions', JSON.stringify(this.questions));

}

    }
  }
}
