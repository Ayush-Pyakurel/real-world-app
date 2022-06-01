import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http:HttpClient) { }
  getTags(){
    let url=`${environment.url}/tags`;
   return  this.http.get<Welcome>(url,{
      headers:new HttpHeaders({'content-type': 'application/json'})
    })
  }
}
interface Welcome {
  tags: string[];
}
