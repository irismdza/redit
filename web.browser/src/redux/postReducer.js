import { data } from './../mock-data';
import { UPDATE_VOTE } from './actions';

const initialState = data.posts;

export function PostReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VOTE:
      data.posts.map((post) => {
        if (action.id === post.id) {
          post.votes += 1;
        }
        return post;
      });

    default:
      return state;
  }
}
