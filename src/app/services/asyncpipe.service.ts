import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsyncpipeService {

  url='https://jsonplaceholder.typicode.com/posts'

  
  constructor(private http:HttpClient) { }



  getDetails(){
    return this.http.get(this.url)
  }
}
