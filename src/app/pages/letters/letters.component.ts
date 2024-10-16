import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent {
    inputs: string[] = ['H', 'E', '', '', 'O', '', '', 'A', '', '', 'E', '']; 
    letters: string[] = [];
    currentInputIndex: number = 0; 
    selectedLetterIndex: number = -1; 
    isAnimating: boolean = false;
    constructor() {}
  
    ngOnInit() {
    
      for (let i = 65; i <= 90; i++) {
        this.letters.push(String.fromCharCode(i));
      }
  
     
      this.currentInputIndex = this.getNextEmptyInputIndex();
      this.isAnimating = true; 
      setTimeout(() => {
        $('#exampleModal').modal('show')
        this.isAnimating = false; 
      },10500 );
    }
  
    
    setInput(letter: string) {
      // Only set the letter if there are still empty inputs
      if (this.currentInputIndex < this.inputs.length) {
        this.inputs[this.currentInputIndex] = letter;
        this.currentInputIndex = this.getNextEmptyInputIndex(); 
      }
    }
  
  
    getNextEmptyInputIndex(): number {
      for (let i = 0; i < this.inputs.length; i++) {
        if (this.inputs[i] === '') {
          return i; 
        }
      }
      return this.inputs.length; 
    }
  
   
    focusInput(index: number) {
      this.currentInputIndex = index; 
    }
  
    triggerAnimation() {
      this.isAnimating = false; 
      setTimeout(() => {
        this.isAnimating = true;
      }, 0);
    }
    highlightLetter(index: number) {
      this.selectedLetterIndex = index;   
    }
    submit(){
      $('#exampleModal').modal('show')
    }
  }
  