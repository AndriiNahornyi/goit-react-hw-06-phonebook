import { addContact } from './types.contactList';
import { removeContact } from './types.contactList';

const initialState = [];
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact:
      return [...state, action.payload];
    case removeContact:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
