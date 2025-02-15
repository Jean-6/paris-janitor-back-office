import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";


export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  return next(req).pipe(
    catchError((error: HttpErrorResponse)=>{
      console.error('Erreur de la requete : ',error);
      return throwError(() => error);
    })
  )

}

