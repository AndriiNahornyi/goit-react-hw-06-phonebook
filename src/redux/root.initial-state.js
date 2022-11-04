import { contactListInitialState } from './contactList/initial-state.contactList';
import { filterInitialState } from './filter/initial-state.filter';

export const rootInitialState = {
  filter: filterInitialState,
  contactList: contactListInitialState,
};
