import { counterReducer } from "../counter/state/counter.reducer";
import { counterState } from "../counter/state/counter.state";
import { PostsReducer } from "../posts/post-list/state/posts.reducer";
import { PostsState } from "../posts/post-list/state/posts.state";

export interface Appstate{
    counter: counterState;
    posts_t: PostsState;
}

export const appReducer = {
    counter: counterReducer,
    posts_t: PostsReducer
}

