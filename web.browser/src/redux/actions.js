// String Constants
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_MOST_POPULAR = 'SORT_MOST_POPULAR';
export const GET_WEEKS = 'GET_WEEKS';

// Action Creators
export const updateVote = id => ({
  type: UPDATE_VOTE, postId: id });

export const sortNewest = () => ({
  type: SORT_NEWEST });

export const sortMostPopular = () => ({
  type: SORT_MOST_POPULAR });

export const getWeeks = () => ({
  type: GET_WEEKS
});
