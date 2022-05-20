import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  constructor(private http: HttpClient) {}

  signUp(param: any) {
    let url = `${environment.url}/users `;
    return this.http.post(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }

  signIn(param: any) {
    let url = `${environment.url}/users/login`;
    return this.http.post<IsignInresponse>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });
  }
}
interface IsignInresponse{
  user:{
    bio:string|null,
    email:string,
    image:string,
    token:string,
    username:string

  }
}
