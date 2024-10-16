import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any; 

@Component({
  selector: 'app-comparative-analysis',
  templateUrl: './comparative-analysis.component.html',
  styleUrls: ['./comparative-analysis.component.scss']
})
export class ComparativeAnalysisComponent {
  selectedOption : any 
  isCorrect : boolean = false;
  currentQuestion : any;
  askedQuestions : any[] = []

  userDetails:any=[
    {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      email: 'john.doe@example.com',
      phonenumber: '123-456-7890'
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'female',
      email: 'jane.smith@example.com',
      phonenumber: '098-765-4321'
    }
  ]
  questions : any = [
    {
       question : "Which statement accurately differentiates federalism from unitarism?",
       options : [
          "Federalism concentrates power at the national level, while unitarism distributes power to local governments",
          "Federalism allows regional autonomy, while unitarism centralizes authorit",
          "Federalism is only applicable in large countries, while unitarism can apply to any size.",
          "Federalism requires a constitution, while unitarism does not."
       ]
    },
    {
      question : "In terms of heroism, how do 'The Iliad' and 'The Aeneid' differ?",
      options : [
         "'The Iliad' portrays heroes as self-serving, while 'The Aeneid' depicts them as selfless.",
         "Federalism allows regional autonomy, while unitarism centralizes authorit",
         "Federalism is only applicable in large countries, while unitarism can apply to any size.",
         " Both works present heroes as entirely virtuous and noble."
      ]
    }
  ]
  
  constructor(private router : Router){}


  ngOnInit(){
    this.nextQuestion()

    

   var key= Object.keys(this.userDetails)
   var values= Object.values(this.userDetails)

   console.log(key,values);

   
    
  }



  submit(){
    console.log(this.selectedOption);
    $('#exampleModal').modal('show');
    
    
  }


  nextQuestion(){
    let questionIndex 
    if(this.askedQuestions.length == this.questions.length){
      
      return
    }
    do{
      questionIndex = Math.floor(Math.random() * this.questions.length);
      console.log(questionIndex);
      console.log(this.askedQuestions.includes(questionIndex));
    }
    while(this.askedQuestions.includes(questionIndex));

    this.askedQuestions.push(questionIndex)
    this.currentQuestion = this.questions[questionIndex];
   
  }
}
