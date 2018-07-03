import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '@portfolio/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("/api/posts").pipe(
      map(posts => posts.map(p => new Post(p)))
    )
  }
}
