import { useDispatch, useSelector } from 'react-redux';
import { ContactsForm } from '../ContactsForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { nanoid } from 'nanoid';
import css from '../App/App.module.css';
import { addContact, removeContact } from 'redux/contactList/slice.contactList';
import { getFilterContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  const handleSubmit = (name, number) => {
    dispatch(addContact({ name: name, id: nanoid(), number: number }));
  };

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };
  return (
    <div>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactsForm handleSubmit={handleSubmit} />

      <h2 className={css.appTitle}>Contacts</h2>

      <Filter />
      <ContactList
        filterContacts={contacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
