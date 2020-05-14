// Dotenv config
require('dotenv').config({ debug: process.env.DEBUG });

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const keys = require('./config/keys');
const DB = require('./db/db');

const app = express();

// Helmet setup
app.use(helmet());

// CORS setup
app.use(cors({ origin: true }));

// DB connection
DB.connect();

/**
 * DEVELOPMENT ONLY CONFIG
 */
if (['development'].includes(keys.env)) {
  // Enables logger in development mode
  const logger = require('morgan');
  app.use(logger('dev'));
}

app.use(express.json({ limit: '12mb' }));
app.use(express.urlencoded({ limit: '12mb', extended: true }));

/* Static Files */
app.use('/static', express.static(path.join(__dirname, 'public')));

/* Routes  */
require('./routes/api')(app);

/**
 * PRODUCTION AND CI ONLY CONFIG
 */
if (['production', 'ci'].includes(keys.env)) {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

module.exports = app;
