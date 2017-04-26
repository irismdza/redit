import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './../redux/postReducer';

const store = createStore(
    combineReducers({
        postList: postReducer,
        // week: weekReducer,
        // categories: categoryReducer
    }),
    {},
    composeWithDevTools(),
);

export default store;
