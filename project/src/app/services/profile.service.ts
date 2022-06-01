import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  getProfileInfo(username:any){
    let url=`${environment.url}/profiles/${username}`;
            console.log('profile',username);

    return this.http.get<Profile>(url,{

      headers:new HttpHeaders({
        // 'username':username,
        'content-type': 'application/json'})

    })
  }
      //follow a user

  postProfileFollow(username:any){
    let url=`${environment.url}/profiles/${username}/follow`;
return this.http.post<Profile>(url,{
  headers:new HttpHeaders({
    'content-type': 'application/json'
  })
})
  }
  postProfileUnfollow(username:any){
    let url=`${environment.url}/profiles/${username}/follow`;
return this.http.delete<Profile>(url,{
  headers:new HttpHeaders({
    'content-type': 'application/json'
  })
})
  
  }
  
  // '/profiles/' + username + '/follow'

}
interface Profile {
  username:  string;
  bio:       string;
  image:     string;
  following: boolean;
}
interface User {
  user:User;
  email: string;
  token:string;
  username:string;
  bio:string;
  image:string;
}

