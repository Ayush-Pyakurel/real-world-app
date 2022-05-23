import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from '../Interface/user';
import { Welcome } from '../Interface/welcome.interface';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  constructor(private http: HttpClient) {}

  signUp(param: any) {
    let url = `${environment.url}/users `;
    return this.http.post<User>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  signIn(param: any) {
    let url = `${environment.url}/users/login`;
    return this.http.post<User>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
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
  }

  userProfile(param: any) {
    let url = `${environment.url}/profile/{username}`;
    return this.http.get<User>(url, param);
  }

  getArticleFeed() {
    let url = `${environment.url}/articles/feed`;
    return this.http.get<Welcome>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  getArticles() {
    let url = `${environment.url}/articles`;
    return this.http.get<Welcome>(url, {
      headers: new HttpHeaders({
        'content-type': 'applicaton/json',
      }),
    });
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
