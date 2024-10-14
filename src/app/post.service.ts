import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  private urlApi = 'https://jsonplaceholder.typicode.com/posts ';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Posts[]>{
    return this.http.get<Posts[]>(this.urlApi);
  };

}
