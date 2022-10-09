import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, tap, catchError, throwError } from 'rxjs';
import { IPlanet } from './star-wars.interface'

@Injectable({
  providedIn: 'root'
})


export class PlanetsService {
  private planetUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) { }

  // Example on getting planets from swapi api
  //   this.getPlanets().subscribe((planets: any) => {
  //     console.log(planets);
  //   });
  // }

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
