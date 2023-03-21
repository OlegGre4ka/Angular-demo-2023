import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../models/IPost.model';
import { IPostsData } from '../models/IPostsData.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPostsData>('https://dummyjson.com/posts',
    {params: new HttpParams().append("limit", 10)})
      .pipe(map(data => {

        let posts: IPost[] = data.posts;

        return posts;
      }))
  }
}
