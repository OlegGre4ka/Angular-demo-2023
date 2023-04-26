import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IPost } from 'src/app/models/IPost.model';
import { ModalService } from 'src/app/services/modal.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  postsData: IPost[] = [];
  // postsData$: Observable<IPost[]>
  isLoading = true;
  constructor(private postsService: PostsService, public modalService: ModalService) { }

  ngOnInit(): void {
    // this.postsData$ = this.postsService.getAllPosts().pipe(
    //   tap(() => this.isLoading = false)
    // )

    this.postsService.getAllPosts().subscribe(
      posts => {
        this.postsData = posts;
        this.isLoading = false;
        // console.log(posts, "posts")
      }
    )
  }
  addNewPost(newPost: IPost){
    this.postsData = [newPost, ...this.postsData];
    // console.log(this.postsData, "newPosts Array")
  }
}
