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

  token: any;

  constructor(
    private injector: Injector //private authServices: AuthServiceService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    let authToken = request;
    this.authService = this.injector.get(AuthServiceService);

    const headerConfig = {
      'content-type': 'application/json',
    };
    this.token = this.authService.getToken();

    if (this.token) {
      headerConfig['authorization'] = `Bearer ${this.token}`;
    }

    authToken = request.clone({
      setHeaders: headerConfig,
    });
    return next.handle(authToken);
  }

  // this.authService = this.injector.get(AuthServiceService);
  // this.token = request.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${this.authService.getToken()}`,
  //   },
  // });
  // return next.handle(this.token);
}
