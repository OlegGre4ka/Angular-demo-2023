import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/models/IPost.model';
import { ModalService } from 'src/app/services/modal.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  @Output() createNewPost = new EventEmitter<IPost>();

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    description: new FormControl<string>('', [
      Validators.required
    ])

  })
  constructor(private modalService: ModalService, private postService: PostsService) { }

  get title() {
    return this.form.controls.title as FormControl
  }

  submit() {
     console.log(this.form, "form-value");
    this.postService.create({
      title: this.form.value.title as string,
      body: this.form.value.description as string,
      userId: 32,
      tags: [],
      reactions: 1
    })
      .subscribe((data) => {
        this.createNewPost.emit(data);
        this.modalService.close();
      })
  }
}
