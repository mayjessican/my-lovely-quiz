import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  quizList = [];
  difficulty = 'Easy';
  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes().subscribe(r => {
      r.forEach((value, index) => {
        this.quizList.push(r[index]);
      });
    });

  }

  ngOnInit() {
  }

}