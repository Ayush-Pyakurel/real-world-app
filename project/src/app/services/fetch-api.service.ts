import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, throwError } from 'rxjs';
// import { map } from 'rxjs';
// import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../Interface/profile';

import { User } from '../Interface/user';
import { Welcome } from '../Interface/welcome.interface';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  constructor(
    private http: HttpClient,
    private injector: Injector //private authService: AuthServiceService
  ) {}

  currentUser: any;
  authServiceInjector: any;

  signUp(param: any) {
    let url = `${environment.url}/users `;
    return this.http
      .post<User>(url, param, {
        headers: new HttpHeaders({
          'content-type': 'application/json',
        }),
      })
      .pipe(
        catchError((err) => {
          console.log(`Error found in service ${err}`);
          return throwError(err);
        })
      );
  }

  signIn(param: any) {
    let url = `${environment.url}/users/login`;
    return this.http.post<User>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
    // .pipe(
    //   catchError((err) => {
    //     console.log(`Error found in service ${err}`);
    //     return throwError(err);
    //   })
    // );
    // .pipe(
    //   tap((resoponse: any) => {
    //     console.log(resoponse);
    //   })
    // );
  }

  signInUser() {
    let url = `${environment.url}/user`;
    return this.http.get<User>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
    // .pipe(
    //   catchError((err) => {
    //     console.log(`Error found in service ${err}`);
    //     return throwError(err);
    //   })
    // );
  }

  updateSignedInUser(params: any) {
    let url = `${environment.url}/user`;
    return this.http.put<User>(url, params, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
    // .pipe(
    //   catchError((err) => {
    //     console.log(`Error found in service ${err}`);
    //     return throwError(err);
    //   })
    // );
  }

  getCurrentUser() {
    this.authServiceInjector = this.injector.get(AuthServiceService);
    this.currentUser = this.authServiceInjector.getCurrentUser();
    return this.currentUser;
  }

  userProfile() {
    let url = `${environment.url}/profile/${this.currentUser}`;
    return this.http.get<Profile>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
    // .pipe(
    //   catchError((err) => {
    //     console.log(`Error found in service ${err}`);
    //     return throwError(err);
    //   })
    // );
  }

  getArticleFeed() {
    let url = `${environment.url}/articles/feed`;
    return this.http.get<Welcome>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
    // .pipe(
    //   catchError((err) => {
    //     console.log(`Error found in service ${err}`);
    //     return throwError(err);
    //   })
    // );
  }

  getArticles() {
    let url = `${environment.url}/articles`;
    return this.http.get<Welcome>(url, {
      headers: new HttpHeaders({
        'content-type': 'applicaton/json',
      }),
    });
    // .pipe(
    //   catchError((err) => {
    //     console.log(`Error found in service ${err}`);
    //     return throwError(err);
    //   })
    // );
  }

  postNewArticles(params: any) {
    let url = `${environment.url}/articles`;
    return this.http.post<Welcome>(url, params, {
      headers: new HttpHeaders({
        'content-type': 'applicaton/json',
      }),
    });
    // .pipe(
    //   catchError((err) => {
    //     console.log(`Error found in service ${err}`);
    //     return throwError(err);
    //   })
    // );
  }
}
// interface IsignInresponse {
//   user: {
//     bio: string | null;
//     email: string;
//     image: string;
//     token: string;
//     username: string;
//   };
// }
