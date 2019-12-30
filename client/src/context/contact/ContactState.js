import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        _id: 1,
        firstName: 'David',
        lastName: 'crazeyl',
        email: 'jayc@gmail.com',
        phone: '6666-6666-6666',
        adress: '20 avenue de remusat',
        type: 'personal',
        postalCode: '31200'
      },
      {
        _id: 2,
        firstName: 'Delphine',
        lastName: 'crazeyl',
        email: 'jayc@gmail.com',
        phone: '6666-6666-6666',
        adress: '20 avenue de remusat',
        type: 'personal',
        postalCode: '31200'
      },
      {
        _id: 3,
        firstName: 'Yolande',
        lastName: 'crazeyl',
        email: 'jayc@gmail.com',
        phone: '6666-6666-6666',
        adress: '20 avenue de remusat',
        type: 'professional',
        postalCode: '31200'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete Contact

  //  Set current contact

  // Clear current contact

  // Update Contact

  // Filter Contact

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
