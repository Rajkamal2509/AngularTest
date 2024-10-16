import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  totalTime: number = 3600; // Total time in seconds (55 minutes 45 seconds)
  remainingTime: number = this.totalTime;
  minutes: number = 55;
  seconds: number = 45;
  progressPercentage: number = 100;
  timerInterval: any;

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateTimeDisplay();
        this.updateProgressBar();
      } else {
        clearInterval(this.timerInterval); 
      }
    }, 1000);
  }

  updateTimeDisplay() {
    this.minutes = Math.floor(this.remainingTime / 60);
    this.seconds = this.remainingTime % 60;
  }

  updateProgressBar() {
    this.progressPercentage = ((this.totalTime - this.remainingTime) / this.totalTime) * 100;

    console.log(this.progressPercentage);
    
  }
}