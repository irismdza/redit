import { data } from '../mock-data';
import { GET_WEEKS } from './actions';

const initialState = data.weeks;

export function WeeksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEEKS:
      console.log(action.payload);
      return action.payload;
    default: return state;
  }
}
