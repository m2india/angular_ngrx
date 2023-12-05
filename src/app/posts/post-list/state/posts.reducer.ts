import { createReducer, on } from "@ngrx/store";
import { initalPostState } from "./posts.state";
import { addPost } from "./posts.action";


const _postsReducer = createReducer(
    initalPostState,
    on(addPost, (state, action) => {

        let post = {...action.post}; // 

        post.id = (state.posts_st.length +1).toString();

        return{
            ...state,
            posts_st: [...state.posts_st, post]
        }
    })
);


export function PostsReducer(state, action){
    return _postsReducer(state, action);
}