const express = require('express');
const router = express.Router();

// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Public
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route       POST api/contacts
// @desc        Add new contact
// @access      Private
router.post('/', (req, res) => {
  res.send('Add a new contact');
});

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Public
router.put('/:id', (req, res) => {
  res.send('update contact');
});

// @route       DELETE api/contacts/:id
// @desc        Update contact
// @access      Public
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
