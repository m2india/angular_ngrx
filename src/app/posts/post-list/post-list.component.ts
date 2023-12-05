import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { Appstate } from 'src/app/store/app.state';
import { getPosts } from './state/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]>;
 
  constructor( private store: Store <Appstate> ){} 

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }
}
