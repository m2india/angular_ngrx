import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getPostById } from '../post-list/state/posts.selector';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/store/app.state';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updatePost } from '../post-list/state/posts.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post: Post;
  postForm : FormGroup;
  postSubscription : Subscription;

  constructor( private route: ActivatedRoute, private store: Store<Appstate> ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription =   this.store.select(getPostById, {id}).subscribe((data) => {
        this.post = data;        
        this.createForm();
      });
    });
  }

  createForm(){

    this.postForm = new FormGroup({
      title : new FormControl(
        this.post.title,
        [
        Validators.required,
        Validators.minLength(4)
        ]
      ),
      description: new FormControl(
        this.post.description, 
        [
        Validators.required,
        Validators.minLength(10)
        ]
      )
    });

  }

  showDescriptionError(){

    const descriptionForm = this.postForm.get('description');

    if(descriptionForm.touched && !descriptionForm.valid)
    {
      if(descriptionForm.errors.required){
        return 'Description is required';
      }

      if(descriptionForm.errors.minlength){
        return 'Description should be of minimum 10 characters';
      }
    }
  }

  onSubmit(){    

      if(!this.postForm.valid){
        return;
      }
    
      const title =  this.postForm.value.title;
      const description =  this.postForm.value.description;

      const post: Post = {
        id: this.post.id,
        title,
        description,
      };


    //  console.log("before sending", post);
      

      this.store.dispatch(updatePost({ post }));

  }

  ngOnDestroy(): void {
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }
} 
