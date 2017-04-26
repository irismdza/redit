import { data } from './../mock-data';
import { UPDATE_VOTE } from './actions';

const initialState = data.posts;

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VOTE:
            const newPostList = state.posts.map((post) => {
                if (action.payload.id === post.id) {
                    post.votes++;
                }
                console.log('vote');
                return post;
            });
            return newPostList;
        default:
            return state;
    }
};

export default postReducer;