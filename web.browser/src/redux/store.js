import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { PostReducer } from './postReducer';
import { SortNewestReducer } from './sortNewestReducer';
import { SortMostPopularReducer } from './sortMostPopularReducer';

export default createStore(
    combineReducers({
      posts: PostReducer, SortNewestReducer, SortMostPopularReducer
      // weeks: WeeksReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        reduxLogger
        ),
);
