// String Constants
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_MOST_POPULAR = 'SORT_MOST_POPULAR';
export const GET_WEEKS = 'GET_WEEKS';
export const SELECT_LESSON = 'SELECT_LESSON';

// Action Creators

export const getWeeks = json => ({
  type: GET_WEEKS, payload: json
});

export const updateVote = id => ({
  type: UPDATE_VOTE, postId: id
});

export const sortNewest = () => ({
  type: SORT_NEWEST
});

export const sortMostPopular = () => ({
  type: SORT_MOST_POPULAR
});

export const selectLesson = lesson => ({
  type: SELECT_LESSON, payload: lesson
});

// Fetch Actions

export const fetchWeeks = () => (dispatch) => {
  fetch('http://localhost:3008/weeks')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      dispatch(getWeeks(json));
    }).catch((error) => {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
};
