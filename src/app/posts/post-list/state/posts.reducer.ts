import { createReducer, on } from "@ngrx/store";
import { initalPostState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.action";

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

        // console.log("state, action", state, action);
        const updatePosts = state.posts_st.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });

        // console.log('const', updatePost);
        return{
            ...state,
            posts_st: updatePosts,
        };
    }),
    on(deletePost,(state, { id }) => {
        const deletePostId = state.posts_st.filter((post) => {
            return post.id !== id;
        })
        return{
            ...state,
            posts_st: deletePostId
        }
    })
);


export function PostsReducer(state, action){
    return _postsReducer(state, action);
}