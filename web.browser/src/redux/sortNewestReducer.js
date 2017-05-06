import { data } from '../mock-data';
import { SORT_NEWEST } from './actions';

const initialState = data.posts;

export function SortNewestReducer(state = initialState, action) {
  switch (action.type) {
    case SORT_NEWEST:
      const sortedPosts = state.sort((a, b) => a.id - b.id);
      console.log('newest');
      return sortedPosts;
    default: return state;
  }
}


  // sortNewest() {
  //   const sortedPosts = this.state.posts.sort((a, b) => a.id - b.id);
  //   this.setState({
  //     posts: sortedPosts
  //   });
  //   console.log('newest');
  // }