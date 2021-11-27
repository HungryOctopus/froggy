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
const contactRouter = require('./routes/contactmail');
const adminmessageRouter = require('./routes/adminmessage');
const pictureRouter = require('./routes/pictureUpload');
const app = express();

app.set('trust proxy', 1);

app.use(
  cors({
    origin: [
      process.env.CLIENT_APP_ORIGIN,
      'https://hoppscotch.io',
      'https://realfrogger.netlify.app'
    ],
    credentials: true
  })
);

app.use(serveFavicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : false,
      secure: process.env.NODE_ENV === 'production'
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
app.use('/', googlemapsRouter);
app.use('/', adminmessageRouter);
app.use('/', contactRouter);
app.use('/', authenticationRouter);
app.use('/api', pictureRouter);

// Handling route for the statistics
const statsRouter = require('./routes/statistics');
app.use('/', statsRouter);

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
