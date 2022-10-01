import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const phoneBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || phoneBook
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = e => {
    setContacts(prev => prev.filter(contact => contact.id !== e));
  };

  const addContact = ({ id, name, number }) => {
    if (contacts.find(contact => contact.name.toLowerCase().trim() === name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, { id: id, name: name, number: number }]);
    }
  };
  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter addFilter={filterContact} />
      <ContactList deleteContact={deleteContact} contactList={filterContact} />
    </div>
  );
};
export default App;
