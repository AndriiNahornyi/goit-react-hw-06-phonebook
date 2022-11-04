import { addContact } from './types.contactList';
import { removeContact } from './types.contactList';

export const addContactAction = payload => ({ type: addContact, payload });
export const removeContactAction = payload => ({
  type: removeContact,
  payload,
});
