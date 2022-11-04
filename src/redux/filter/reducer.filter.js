import { filterContact } from '../filter/types.filter';
const initialState = '';
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterContact:
      return action.payload;
    default:
      return state;
  }
};
