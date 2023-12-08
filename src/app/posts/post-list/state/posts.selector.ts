import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostsState } from "./posts.state";
export const POST_STATE_NAME = 'posts_t';

const getPostsState = createFeatureSelector<PostsState>('posts_t');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts_st;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
    // console.log(props);

    return state.posts_st.find( (post) => post.id === props.id );
    
    // return state.posts_st[props.id] ? state.posts_st[props.id] : null ;
})