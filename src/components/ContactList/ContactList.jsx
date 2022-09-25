import PropTypes from 'prop-types';

const ContactList = ({ deleteContact, contactList }) => {
  return (
    <ul>
      {contactList().map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>

            <button type="button" onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contactList: PropTypes.func.isRequired,
};
export default ContactList;
