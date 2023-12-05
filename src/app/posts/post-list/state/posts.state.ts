import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts_st: Post[];
}


export const initalPostState: PostsState = {
    posts_st: [
        {id: '1', title: 'Sample Title 1', description: 'Sample description 1' },
        {id: '2', title: 'Sample Title 2', description: 'Sample description 2' }
    ]
}