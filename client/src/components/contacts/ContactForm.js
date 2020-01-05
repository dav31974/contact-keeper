import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { CLEAR_CURRENT } from '../../context/types';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, clearCurrent, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adress: '',
        postalCode: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adress: '',
    postalCode: '',
    type: 'personal'
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    adress,
    postalCode,
    type
  } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className={current ? 'text-danger' : 'text-primary'}>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='FirstName'
        name='firstName'
        value={firstName}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='LastName'
        name='lastName'
        value={lastName}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='adress'
        name='adress'
        value={adress}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='postal Code'
        name='postalCode'
        value={postalCode}
        onChange={onChange}
      />
      <h5>Contact type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className={
            'btn ' + (current ? 'btn-danger' : 'btn-primary') + ' btn-block'
          }
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
