import { combineReducers } from 'redux';
import filterReducer from './filter/slice.filter';
import contactListReducer from './contactList/slice.contactList';
export const rootReducer = combineReducers({
  filter: filterReducer,
  contactList: contactListReducer,
});
