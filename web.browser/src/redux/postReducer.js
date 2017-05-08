import { data } from '../mock-data';
import { SORT_NEWEST } from './actions';
import { SORT_MOST_POPULAR } from './actions';
import { UPDATE_VOTE } from './actions';

const initialState = data.posts;

export function PostReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VOTE:
      const updateVote = state.map((post) => {
        if (action.postId === post.id) {
          post.votes += 1;
        }
        return post;
      });
      return updateVote;
    case SORT_MOST_POPULAR:
      const sortedPopPosts = state.slice().sort((a, b) => b.votes - a.votes);
      return sortedPopPosts;
    case SORT_NEWEST:
      const sortedNewPosts = state.slice().sort((a, b) => a.id - b.id);
      return sortedNewPosts;
    default: return state;
  }
}


