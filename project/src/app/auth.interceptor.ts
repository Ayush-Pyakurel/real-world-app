import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // authService!: AuthService;
  token: any;

  constructor(private injector: Injector,private authService:AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
 const headersConfig:any={
  'Content-Type': 'application/json',
  'Accept': 'application/json'

 };
 this.token=this.authService.getToken();
 if(this.token)
 {
headersConfig['Authorization']=`Bearer ${this.token}`;
 }
    // this.authService = this.injector.get(AuthService)
    
    const req= request.clone({
      setHeaders: headersConfig
    });
    return next.handle(req);
  }

}

// import { Injectable, Injector } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from './services/auth.service';


// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   authService!: AuthService;
//   token: any;
//   // authToken: any;

//   constructor(private injector: Injector) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): any {
 
//     this.authService = this.injector.get(AuthService)
    
//     this.token = request.clone({
//       setHeaders: {
//         authorization: `Bearer ${this.authService.getToken()}`
//       },
//     });
//     console.log('interceptor')
//     return next.handle(this.token);
//   }

// }


