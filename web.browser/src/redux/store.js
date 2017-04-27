import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxLogger from 'redux-logger';
import { PostReducer } from './postReducer';

// const mockMiddleware = store => next => (action) => {
//   console.log(store.getState());
//   const done = next(action);
//   console.log(store.getState());
//   return done;
// };

export default createStore(
    combineReducers({
      posts: PostReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        reduxLogger
        ),
);
