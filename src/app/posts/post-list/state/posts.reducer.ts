import { createReducer, on } from "@ngrx/store";
import { initalPostState } from "./posts.state";
import { addPost, updatePost } from "./posts.action";
import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";


const _postsReducer = createReducer(
    initalPostState,
    on(addPost, (state, action) => {

        let post = {...action.post}; // 

        post.id = (state.posts_st.length +1).toString();

        return{
            ...state,
            posts_st: [...state.posts_st, post]
        }
    }),
    on(updatePost, (state, action) => {

    //    console.log("state, action", state, action);

        const updatePosts = state.posts_st.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });
    //    console.log('const', updatePost);
    
        return{
            ...state,
            posts_st: updatePosts,
        };

    })
);


export function PostsReducer(state, action){
    return _postsReducer(state, action);
}