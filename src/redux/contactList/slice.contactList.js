import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
};
const contactListSlice = createSlice({
  name: 'contactList',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactListSlice.actions;
export default contactListSlice.reducer;
