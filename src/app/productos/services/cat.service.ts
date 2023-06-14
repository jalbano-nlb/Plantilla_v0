import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  obtenerGatos() {
    return this.http.get('https://cat-fact.herokuapp.com/facts/').pipe(
      map( resp => resp )
    );
  }

}
