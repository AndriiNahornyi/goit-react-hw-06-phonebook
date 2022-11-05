import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactList/slice.contactList';
import { getFilterContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);
  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };
  return (
    <ul>
      {contacts.map(contact => (
        <li className={css.contactListItem} key={contact.id}>
          <p
            className={css.ContactListItem}
          >{`${contact.name}: ${contact.number}`}</p>
          <button
            className={css.contactListBtn}
            onClick={() => handleDeleteContact(contact.id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
