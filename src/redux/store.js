import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

import { contactListInitialState } from './contactList/initial-state.contactList';
import { contactReducer } from './contactList/reducer.contactList';

import { filterInitialState } from './filter/initial-state.filter';
import { filterReducer } from './filter/reducer.filter';

const rootReducer = combineReducers({
  contactList: contactReducer,
  filter: filterReducer,
});
const initialState = {
  contactList: contactListInitialState,
  filter: filterInitialState,
};
const enhancher = devToolsEnhancer();
export const store = createStore(rootReducer, initialState, enhancher);
