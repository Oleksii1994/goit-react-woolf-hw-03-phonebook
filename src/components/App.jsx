import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    const isContactExists = contacts.find(
      contact =>
        contact.number === data.number ||
        contact.name.toLowerCase() === data.name.toLowerCase()
    );

    isContactExists
      ? alert('This contact already exists')
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { ...data, id: nanoid() }],
        }));
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    if (contacts.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
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
