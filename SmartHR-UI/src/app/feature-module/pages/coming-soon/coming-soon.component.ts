import { Component, OnInit, OnDestroy } from '@angular/core';
/* eslint-disable @typescript-eslint/no-explicit-any */

@Component({
    selector: 'app-coming-soon',
    templateUrl: './coming-soon.component.html',
    styleUrl: './coming-soon.component.scss',
    standalone: false
})
export class ComingSoonComponent implements OnInit, OnDestroy {
  days = 0;
hours = 0;
minutes = 0;
seconds = 0;
countdownExpired = false;
email = ''; // Declare the 'email' property

private countdownInterval: any;

ngOnInit() {
  this.setCountdown();
}

ngOnDestroy() {
  clearInterval(this.countdownInterval);
}

setCountdown() {
  // Dynamically set the countdown date to 30 days from the current date
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 30);
  const countdownDate = currentDate.getTime();

  this.countdownInterval = setInterval(() => {
    const todayDate = new Date().getTime();
    const distance = countdownDate - todayDate;

    // Calculate remaining time
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Check if countdown has expired
    if (distance < 0) {
      clearInterval(this.countdownInterval);
      this.countdownExpired = true;
    }
  }, 1000);
}

}
