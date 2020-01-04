import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const {
    id,
    firstName,
    lastName,
    email,
    type,
    phone,
    adress,
    postalCode
  } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left h4'>
        {firstName} {lastName}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <div className='grid-2'>
        <div>
          <ul className='list'>
            {email && (
              <li>
                <i className='fas fa-envelope-open'> {email}</i>
              </li>
            )}
            {phone && (
              <li>
                <i className='fas fa-phone'> {phone}</i>
              </li>
            )}
            {adress && (
              <li>
                <i className='fas fa-globe-americas'> {adress}</i> {postalCode}
              </li>
            )}
          </ul>
        </div>
        <div>
          <button
            style={{ float: 'right', marginTop: '30px' }}
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button
            style={{ float: 'right', marginTop: '30px' }}
            className='btn btn-danger btn-sm'
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
