import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quiz, Question } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  public getQuizzes() {
    return this.http.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`).pipe(
      map((result: any[]) => {
        // return result.map(r => new Quiz(r.label, r.name, r.description, r.fileName));
        return result.map(r => new Quiz(r.label, r.name,));
      })
    );
  }

  public getQuestions(fileName: string) {
    return this.http.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`).pipe(
      map((result: any[]) => {
        return result.map(r => new Question(r.label, r.choices));
      })
    );
  }

  // public getJSON(fileId: string) {
  //   return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  // }

  // public getQuizzes() {
  //   return this.http.get(`./assets/quiz-list.json`).pipe(
  //     map((result: any[]) => {
  //       return result.map(
  //         (r) => new Quiz(r.label, r.name, r.description, r.fileName)
  //       );
  //     })
  //   );
  // }

  // public getQuestions(fileName: string) {
  //   return this.http.get(`./assets/${fileName}.json`).pipe(
  //     map((result: any[]) => {
  //       return result.map((r) => new Question(r.label, r.choices));
  //     })
  //   );
  // }
}
