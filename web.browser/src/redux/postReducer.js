import { data } from '../mock-data';
import { UPDATE_VOTE } from './actions';

const initialState = data.posts;

export function PostReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VOTE:
      const updateVote = state.map((post) => {
        console.log('post?', post.votes);
        if (action.postId === post.id) {
          post.votes += 1;
        console.log('post 2', post.votes);
        console.log('this is updateVote', updateVote);
        }
      });
      console.log('action?', action);
      console.log('updateVote: ', updateVote);
      return updateVote;
    default: return state;
  }
}


