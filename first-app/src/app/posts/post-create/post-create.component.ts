import { Component, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import{PostService} from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})

/* We will create this function in our PostCreateComponent class. In this method,
we will create an alert message that will show "Post is added successfully". */
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostService){}

  onAddPost( form: NgForm){
    if(form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content )
  }
}
