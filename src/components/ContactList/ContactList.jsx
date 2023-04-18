import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactList } from './ContactList.styled';
export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
      <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ContactList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
