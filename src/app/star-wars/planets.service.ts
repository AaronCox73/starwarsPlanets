import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, tap, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class PlanetsService {
  private planetUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) { }

 // function to get planet results from swapi array
  getPlanets() {
    return this.http.get<any>(this.planetUrl)
      .pipe(
        tap(data => console.log('Service', (data.results))),
        catchError(this.handleError))
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage)
  }
}
