import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from '../models/Subject';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  _http = inject(HttpClient);
  baseApi:string = 'http://localhost:58161/assets/data'

  getSubjects():Observable<Subject[]>{
    return this._http.get<Subject[]>(`${this.baseApi}/subject.json`).pipe(
      tap(data => console.log('incoming data: ',data)),
      catchError((error) => throwError(error))
    )
  }
}
