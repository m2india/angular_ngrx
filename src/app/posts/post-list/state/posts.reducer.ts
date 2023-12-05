import { createReducer } from "@ngrx/store";
import { initalPostState } from "./posts.state";


const _postsReducer = createReducer(initalPostState);


export function PostsReducer(state, action){
    return _postsReducer(state, action);
}