import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any
@Component({
  selector: 'app-visualmemory',
  templateUrl: './visualmemory.component.html',
  styleUrls: ['./visualmemory.component.scss']
})
export class VisualmemoryComponent {
  currentQuestionIndex: number = 0;
  totalQuestions: number = 0;
  question: Array<any> = [
    {
      id: 1,
      questionWords: " How many triangles are there in the given figure?",
      question: "A-3-subdivision-of-an-equilateral-triangle.png",
      option: [
        {
          id: 1,
          option: 29,
          correct: true
        },
        {
          id: 2,
          option: 27,
          correct: false
        },
        {
          id: 3,
          option: 23,
          correct: false
        },
        {
          id: 4,
          option: 30,
          correct: false
        }

      ]
    },
    {
      id: 1,
      questionWords: "What would the 3D shape look like from above?",
      question: "square.JPG",
      option: [
        {
          id: 1,
          option: 29,
          correct: true
        },
        {
          id: 2,
          option: 27,
          correct: false
        },
        {
          id: 3,
          option: 23,
          correct: false
        },
        {
          id: 4,
          option: 30,
          correct: false
        }

      ]
    }
  ]
  selectOptionId: number = 0
  constructor(private router: Router) { }
  ngOnInit() {
    this.totalQuestions = this.question.length;
  }
  checkAnswer(val: any) {
    console.log(val)
    this.selectOptionId = val.id

  }
  submit() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++; 
    } else {

    }

  }
  getCurrentQuestion() {
    return this.question[this.currentQuestionIndex];
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++; 
    } else {

      console.log("End of quiz or go to the results page");
      this.router.navigateByUrl('/results-page'); 
    }
  }
}


