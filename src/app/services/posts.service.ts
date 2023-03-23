import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IPost } from '../models/IPost.model';
import { IPostsData } from '../models/IPostsData.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: IPost[] = [];


  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPostsData>('https://dummyjson.com/posts',
    {params: new HttpParams().append("limit", 10)})
      .pipe(map(data => {
        console.log(data.posts, "post-data")

        this.posts = data.posts;

        return this.posts;
      }))
  }

  create(post: IPost): Observable<IPost> {
    let headers = new HttpHeaders();
    return this.http.post<IPost>('https://dummyjson.com/posts/add', post,
    {
      headers: headers.set( 'Content-Type', 'application/json')
    })
  }
}
