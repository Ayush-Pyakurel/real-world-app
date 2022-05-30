import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { FetchApiService } from './fetch-api.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable()
export class GlobalErrorHandlingInterceptor implements HttpInterceptor {
  constructor(
    private apiService: FetchApiService,
    private toaster: NgToastService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        console.log(`Error is intercepted`, error);
        return throwError(error.message);
      })
    );
  }
}
