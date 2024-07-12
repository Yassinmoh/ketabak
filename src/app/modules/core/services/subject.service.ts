import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from '../models/Subject';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private _http = inject(HttpClient);
  private baseApi:string = '/assets/data'

  getSubjects():Observable<Subject[]>{
    return this._http.get<Subject[]>(`${this.baseApi}/subject.json`).pipe(
      catchError((error) => throwError(error))
    )
  }
}
