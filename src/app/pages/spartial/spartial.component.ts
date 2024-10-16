import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
declare var $: any
@Component({
  selector: 'app-spartial',
  templateUrl: './spartial.component.html',
  styleUrls: ['./spartial.component.scss']
})
export class SpartialComponent {
  currentQuestionIndex: number = 0;
  totalQuestions: number = 0;
  constructor(private router: Router) { }
  question: Array<any> = [
    {
      id: 1,
      questionWords:"What would the 3D shape look like from above?",
      question: "spartialquestion.JPG",
      option: [
        {
          id: 1,
          option: "sap1.JPG",
          choose: "A",
          correct: false
        },
        {
          id: 2,
          option: "sap2.JPG",
          choose: "B",
          correct: true
        },
        {
          id: 3,
          option: "sap3.JPG",
          choose: "C",
          correct: false
        },
        {
          id: 4,
          option: "sap4.JPG",
          choose: "D",
          correct: false
        }
      ]
    },
    {
      id: 2,
      questionWords:"Which of the given shapes is the correct mirror image?",
      question: "spartial2.JPG",
      option: [
        {
          id: 1,
          option: "spa1.JPG",
          choose: "A",
          correct: false
        },
        {
          id: 2,
          option: "spa3.JPG",
          choose: "B",
          correct: true
        },
        {
          id: 3,
          option: "spa3.JPG",
          choose: "C",
          correct: false
        },
        {
          id: 4,
          option: "spa4.JPG",
          choose: "D",
          correct: false
        }
      ]
    }
  ]
  selectOptionId: any


  ngOnInit() {
    this.totalQuestions = this.question.length;

  }
  selectOption(val: any) {

    console.log(val.id);
    
    this.selectOptionId = val.id
  }
  submit() {

    if(this.selectOptionId!=null || this.selectOptionId!=undefined){
      $('#exampleModal').modal('show');
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++; 
    } else {

    }
  }

  // Function to track current question in template
  getCurrentQuestion() {
    return this.question[this.currentQuestionIndex];
  }
}

