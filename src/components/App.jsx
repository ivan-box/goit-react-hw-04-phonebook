import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // addContact = ({ name, number }) => {
  //   if (
  //     this.state.contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     this.setState(prev => ({
  //       contacts: [
  //         ...prev.contacts,
  //         { id: nextId(), name: name, number: number },
  //       ],
  //     }));
  //   }
  // };

  onSubmitForm = ({ name, number }) => {
    const newState = { id: Date.now(), name: name, number: number };
    let someName = this.state.contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (!someName) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newState],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  addFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      // <div
      // // style={{
      // //   height: '100vh',
      // //   display: 'flex',
      // //   justifyContent: 'center',
      // //   alignItems: 'center',
      // //   fontSize: 40,
      // //   color: '#010101',
      // // }}
      // >
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmitForm} />

        <h2>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
