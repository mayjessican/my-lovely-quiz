import { Component, OnInit, Input } from '@angular/core';
import { Answers } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() answers: Answers;

  answersCheck(incorrectNum: number) {
  if (incorrectNum === 0) {
    return 'Wow WHAT A SUPERSTAR! You are truly a trivia master!';
  }
  if (incorrectNum <= 3) {
    return 'Great job! Thats like a B- performance!';
  }
  if (incorrectNum <= 5) {
    return 'Ehh.. Not too bad but also, Maybe try harder?';
  }
  if (incorrectNum >= 6)
    return 'You should probably stick to your day job!!';
  }
}
