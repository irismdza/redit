import { SELECT_LESSON } from './actions';

const initialState = 'React';

export function LessonReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_LESSON:
      console.log(action.payload);
      console.log('this is selected lesson', initialState);
      return action.payload;
    default: return state;
  }
}
