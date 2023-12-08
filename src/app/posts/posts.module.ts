import { NgModule } from "@angular/core";
import { PostListComponent } from "./post-list/post-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { CommonModule } from "@angular/common";
import { Router, RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";


const routes: Routes = [
    {
        path: '', 
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
    declarations: [
        PostListComponent,
        AddPostComponent,
        EditPostComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})

export class PostsModule {}