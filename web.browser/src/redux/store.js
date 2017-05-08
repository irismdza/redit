import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { PostReducer } from './postReducer';
import { LessonReducer } from './../redux/selectedLessonReducer';
import { WeeksReducer } from './weeksReducer';

export default createStore(
  combineReducers({
    posts: PostReducer,
    weeks: WeeksReducer,
    selectedLesson: LessonReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    reduxLogger,
    thunk
  ),
);
