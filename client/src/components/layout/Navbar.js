import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <h1 class='navbar-brand'>
        <i className={icon} /> Contact Keeper
      </h1>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor02'
        aria-controls='navbarColor02'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor02'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home <span class='sr-only'></span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: ' Contact Keeper',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;