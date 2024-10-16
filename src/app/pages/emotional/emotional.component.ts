import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-emotional',
  templateUrl: './emotional.component.html',
  styleUrls: ['./emotional.component.scss']
})
export class EmotionalComponent {
  selectedOption: any
  isCorrect: boolean = false;
  currentQuestion: any;
  askedQuestions: any[] = []
  currentQuestionIndex: number = 0;
  totalQuestions: number = 0;

  questions: any = [
    {
      category: "Emotional Intelligence",
      title: "Emotional Intelligence",
      question: "Assume you are going somewhere by bus. You have noticed that someone has left a wallet. What would you do?",
      options: {
        A: "Donate the money from the wallet to the needy.",
        B: "Would not touch the wallet and let it in its place.",
        C: "Give it to the conductor of the bus.",
        D: "With the help of information available in the wallet, you would try to find its owner and inform them about the situation.",
        E: "Take the wallet along with you and spend the money for yourself."
      },
      answer: "D",
      questionNo: 1
    },
    {
      category: "Emotional Intelligence",
      title: "Emotional Intelligence",
      question: "Assume that you are the head of the office in which you work. An employee of this company was turned off for work as his mother was ill. What would you do?",
      options: {
        A: "Shout the employee and warn him to work properly.",
        B: "Ask about his mother’s condition and suggest he inform you when he takes leave.",
        C: "Ask him about his mother’s condition and provide him with a leave.",
        D: "Let him relax."
      },
      answer: "B",
      questionNo: 2
    }
  ]


  constructor(private router: Router) { }


  ngOnInit() {
    this.totalQuestions = this.questions.length;
  }



  submit() {

    if (this.selectedOption != null || this.selectedOption != undefined) {
      $('#exampleModal').modal('show');
    }

  }

  selectOption(val: any) {
    this.selectedOption = val
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions - 1) {
      this.currentQuestionIndex++;
    } else {

    }
  }

  getCurrentQuestion() {

    console.log(this.questions);

    return this.questions[this.currentQuestionIndex];
  }
}
