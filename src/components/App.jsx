import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      // { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      // { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      // { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      // { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onFilter={this.onFilter} />
          {contacts.length > 0 && (
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </div>
      </div>
    );
  }
}
