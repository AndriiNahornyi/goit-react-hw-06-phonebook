export const getFilterContacts = state =>
  state.contactList.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );
export const getFilter = state => state.filter;
