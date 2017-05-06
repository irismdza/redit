import { data } from '../mock-data';
import { SORT_MOST_POPULAR } from './actions';

const initialState = data.posts;

export function SortMostPopularReducer(state = initialState, action) {
  switch (action.type) {
    case SORT_MOST_POPULAR:
      const sortedPosts = state.sort((a, b) => b.votes - a.votes);
      console.log('most popular');
      return sortedPosts;
    default: return state;
  }
}



  // sortMostPopular() {
  //   const sortedPosts = this.state.posts.sort((a, b) => b.votes - a.votes);
  //   this.setState({
  //     posts: sortedPosts
  //   });
  //   console.log('most popular');
  // }