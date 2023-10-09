import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../list-of-tasks/model/Task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;

  constructor(private _httpClient: HttpClient) {}

  getAll(endpoint: string):Observable<any>{
    return this._httpClient.get(`${this.apiUrl}${endpoint}`).pipe(catchError(this.handleError));
  }

  delete(endpoint: string, id: number):Observable<any>{
    return this._httpClient.delete(`${this.apiUrl}${endpoint}${id}`).pipe(catchError(this.handleError));
  }

  add(endpoint: string, task:Task):Observable<any>{
    return this._httpClient.post(`${this.apiUrl}${endpoint}`, task).pipe(catchError(this.handleError));
  }

  patch(endpoint: string, id: number, body: any):Observable<any>{
    return this._httpClient.patch(`${this.apiUrl}${endpoint}${id}`, body).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(`Something bad happened; please try again later`));
  }

}
