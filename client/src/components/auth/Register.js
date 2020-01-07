import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === '') {
      setAlert(' your name must be indicated', 'danger', 6000);
    } else if (email === '') {
      setAlert(' your email must be indicated', 'danger', 6000);
    } else if (password === '') {
      setAlert(' your password must be indicated', 'danger', 6000);
    } else if (password2 === '') {
      setAlert(' your password confirm must be indicated', 'danger', 6000);
    } else if (password2 !== password) {
      setAlert(' The password confirmation is not valid', 'danger', 6000);
    } else console.log('registration submit');
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Enter your name'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Adress</label>
          <input
            type='text'
            name='email'
            placeholder='Enter your email adress'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Choose a great password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Password Confirm</label>
          <input
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={password2}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
