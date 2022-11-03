import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

import { contactListInitialState } from './contactList/initial-state.contactList';
import { contactListReducer } from './contactList/reducer.contactList';

import { contactsFormInitialState } from './contactsForm/initial-state.contactsForm';
import { contactsFormReducer } from './contactsForm/reducer.contactsForm';

import { filterInitialState } from './filter/initial-state.filter';
import { filterReducer } from './filter/reducer.filter';

const rootReducer = combineReducers({
  conactList: contactListReducer,
  contactsForm: contactsFormReducer,
  filter: filterReducer,
});
const initialState = {
  contactList: contactListInitialState,
  contactsForm: contactsFormInitialState,
  filter: filterInitialState,
};
const enhancher = devToolsEnhancer();
export const store = createStore(rootReducer, initialState, enhancher);
