// String Constants
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_MOST_POPULAR = 'SORT_MOST_POPULAR';

// Action Creators
export const updateVote = vote => ({ type: UPDATE_VOTE, vote });

export const sortNewest = newest => ({ type: SORT_NEWEST, payload: newest });

export const sortMostPopular = popular => ({ type: SORT_MOST_POPULAR, popular });
