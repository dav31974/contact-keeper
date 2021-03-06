const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the contact keeper' }));

const PORT = process.env.PORT || 5000;

// define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
