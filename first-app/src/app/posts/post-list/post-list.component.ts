import {Component, OnInit} from "@angular/core";
import { subscribeOn, Subscription } from "rxjs";
import {Post} from '../post.model';
import{PostService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  /*posts=[
   {title: 'First Post', content:'This is the first post\'s content'},
   {title: 'Second Post', content:'This is the second post\'s content'},
    {title: 'Third Post', content:'This is the third post\'s content'}
    ];*/

    //create an empty array
    posts : Post[] = [];
    private PostSub : Subscription;
    constructor(public postsService: PostService){}

    ngOnInit(){
      this.postsService.getPosts();
      this.PostSub=this.postsService.getPostUpdateListener();
      subscribe((posts : Post[])=>{

      });

    }
    ngOnDestroy(){
      this.PostSub.unsubscribe();
    }
}
