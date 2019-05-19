import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
  baseUrl = "https://api.datamuse.com/words";
  constructor(private httpClient: HttpClient) { }

  getSynonyms(word: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}?ml=${word}&max=10`)
      .pipe(
        map(val => val.map(m => m.word))
      );
  }

  getRhymes(word: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}?rel_rhy=${word}&max=10`)
      .pipe(
        map(val => val.map(m => m.word))
      );
  }
}