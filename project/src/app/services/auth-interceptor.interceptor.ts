import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  authService: any;
  authToken: any;

  constructor(
    private injector: Injector //private authServices: AuthServiceService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    this.authService = this.injector.get(AuthServiceService);
    this.authToken = request.clone({
      setHeaders: {
        authorization: `Bearer ${this.authService.getToken()}`,
      },
    });

    return next.handle(this.authToken);
  }
}
