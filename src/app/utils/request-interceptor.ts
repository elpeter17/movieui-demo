import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptando antes del request...');
    const authToken = 'MI_TOKEN_SFGVDNSDC';
    const request = req.clone({
      headers: req.headers.set('x-access-token', `${authToken}`)
    });
    return next.handle(request).pipe(
      catchError(this.handleErrors)
    );
  }

  private handleErrors(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Error del cliente';
    } else {
      errorMessage = `Error de servidor.\nCode: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
