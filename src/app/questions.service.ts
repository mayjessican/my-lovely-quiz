import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) {
  }

  public getJSON(fileId: string) {
    return this.http.get(`./assets/${fileId}.json`) as Observable<any>;
  }

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
