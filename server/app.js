'use strict';

const path = require('path');
const express = require('express');
const createError = require('http-errors');
const connectMongo = require('connect-mongo');
const expressSession = require('express-session');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const cors = require('cors');
const basicAuthenticationDeserializer = require('./middleware/basic-authentication-deserializer.js');
const bindUserToViewLocals = require('./middleware/bind-user-to-view-locals.js');
const baseRouter = require('./routes/index');
const authenticationRouter = require('./routes/authentication');
const googlemapsRouter = require('./routes/googlemaps');

const app = express();

app.use(
  cors({
    origin: [
      process.env.CLIENT_APP_ORIGIN,
      'https://hoppscotch.io',
      'https://affectionate-jennings-499da5.netlify.app'
    ],
    credentials: true
  })
);

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true
    },
    store: connectMongo.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 60 * 60
    })
  })
);
app.use(basicAuthenticationDeserializer);
app.use(bindUserToViewLocals);

app.use('/', baseRouter);
app.use('/authentication', authenticationRouter);
app.use('/', googlemapsRouter);

// Handling route for the statistics
const statsRouter = require('./routes/statistics');
app.use('/api', statsRouter);

// Catch missing routes and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Catch all error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ type: 'error', error: { message: error.message } });
});

module.exports = app;
