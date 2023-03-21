import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IPost } from 'src/app/models/IPost.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  // postsData: IPost[] = [];
  postsData$: Observable<IPost[]>
  isLoading = true;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsData$ = this.postsService.getAllPosts().pipe(
        tap(() => this.isLoading = false)
      )

    // this.postsService.getAllPosts().subscribe(
    //   posts => {
    //     this.postsData = posts;
    //     console.log(posts, "posts")
    //   }
    // )
  }
}
