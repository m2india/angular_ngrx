import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', component: CounterComponent
  },
  {
    path: 'posts', 
    component: PostListComponent,
    children : [
      { 
        path: 'addPost', component:AddPostComponent
      },
      {
        path: 'edit/:id',
        component: EditPostComponent
      }
    ]

  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
