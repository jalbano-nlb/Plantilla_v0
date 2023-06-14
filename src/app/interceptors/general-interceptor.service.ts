import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInterceptorService implements HttpInterceptor { 

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const nlb_token = new HttpHeaders({
      'token-user': 'ABC123ABC123'
    });

    const cloneReq = req.clone({
      headers: nlb_token
    });

    console.log("Estoy interceptando");
    
    return next.handle(cloneReq).pipe(
      
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse){
    console.log('Hubo error');
    console.warn(error);

    return throwError(()=> new Error('Error Noalba'));
  }

}
