import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  constructor(private http: HttpClient) { }
  //Register new User
  signUp(param: any) {
    let url = `${environment.url}/users`;
    return this.http.post<IsignUpResponse>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    });

  }
  //login existing user login
  signIn(param: any) {
    let url = `${environment.url}/users/login`;
    return this.http.post<IsignInresponse>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',

      }),
    });
  }
  loggedInCheck() {
    return !!localStorage.getItem('token')
  }



  article() {
    let url = `${environment.url}/articles`;
    return this.http.get<Welcome>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    })
  }
  postArticle(param: any) {
    let url = `${environment.url}/articles`;
    return this.http.post<Welcome>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',

      })
    })
  }
  // getArticle(slug:string){
  //   let url = `${environment.url}/articles/${slug}`;
  //   return this.http.get<Welcome>(url,{
  //     headers:new HttpHeaders({
  //       'content-type': 'application/json',

  //     })
  //   })

  // }
  getArticleFeed() {
    let url = `${environment.url}/articles/feed`;
    return this.http.get<Welcome>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })

    })

  }

  getCurrentUser() {
    let url = `${environment.url}/user`;
    //  const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lZW5hQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTWVlbmEiLCJpYXQiOjE2NTM1NTMzMTQsImV4cCI6MTY1ODczNzMxNH0.70vfO1NY_zolVHcnYI1_5SINwE4SNM1m6a1-CdnftBc'
    return this.http.get<User>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        // 'Authorization':`Bearer ${token}`

      }),

    })

  }
  updateUser(param: any) {
    let url = `${environment.url}/user`;
    return this.http.put<User>(url, param, {
      headers: new HttpHeaders({
        'content-type': 'application/json',

      }),
    })

  }
  getArticle(slug: string) {
    let url = `${environment.url}/articles/${slug}`;

    return this.http.get<Article>(url, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    })
  }
//Get Recent article Globally
getRecentArticle(){
  let url = `${environment.url}/articles`;
  return this.http.get<Welcome>(url,{
    headers: new HttpHeaders({
      'content-type': 'application/json',
    }),

  })


}

}

interface IsignInresponse {
  user: {
    bio: string | null,
    email: string,
    image: string,
    token: string,
    username: string

  }

}


interface Welcome {
  articles: Article[];
  articlesCount: number;
}
interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}
interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}


interface IsignUpResponse {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  }
}
interface User {
  user: User;
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}
