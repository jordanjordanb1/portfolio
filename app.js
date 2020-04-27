const express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    helmet = require('helmet'),
    __CONFIG__ = require('./config');

// Dotenv config
require('dotenv').config()

const indexRouter = require('./routes/index'),
    apiRouter = require('./routes/api')

const app = express();

// Fixed mongoose deprecation error
mongoose.set('useCreateIndex', true);

// Connecting to server
console.log(`*** Trying to connect to ${process.env.NODE_ENV} DB ***`)

const mongoUrl = process.env.NODE_ENV === 'production' ? __CONFIG__.mongoProdUrl : __CONFIG__.mongoUrl
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(db => console.log('*** Connected to MongoDB ***'))
    .catch(console.error)


// Helmet setup
app.use(helmet())

// CORS setup
app.use(cors({ origin: true }))

// Enables logger in development mode
process.env.NODE_ENV !== 'production' && app.use(logger('dev'));

app.use(express.json({ limit: '12mb' }))
app.use(express.urlencoded({ limit: '12mb', extended: true }))

// Static path
app.use(express.static(path.join(__dirname, 'public')));

/* Routes  */
app.use('/api', apiRouter);
app.use('/', indexRouter);

module.exports = app;
