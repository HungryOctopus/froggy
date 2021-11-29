'use strict';

const express = require('express');
const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const router = express.Router();

router.post('/sign-up', (req, res, next) => {
  const { firstName, secondName, imageUrl, email, password, role, location } =
    req.body;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return User.create({
        firstName,
        secondName,
        imageUrl,
        email,
        passwordHashAndSalt: hash,
        role,
        location
      });
    })
    .then((user) => {
      req.session.userId = user._id;
      res.json({ user });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHashAndSalt);
      }
    })
    .then((result) => {
      if (result) {
        req.session.userId = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/me', (req, res, next) => {
  const user = req.user;
  res.json({ user });
});

router.post('/update', (req, res, next) => {
  const id = req.session.userId;
  const { firstName, secondName, email, password, location, imageUrl } =
    req.body;
  bcryptjs
    .hash(password, 10)
    .then((hash) => {
      return User.findById(id).then((user) => {
        return hash === user.passwordHashAndSalt
          ? user.passwordHashAndSalt
          : hash;
      });
    })
    .then((passUpdate) => {
      return User.findByIdAndUpdate(
        id,
        {
          firstName,
          secondName,
          email,
          passwordHashAndSalt: passUpdate,
          location,
          imageUrl
        },
        { new: true }
      ).then((response) => {
        res.json(response);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/delete', (req, res, next) => {
  const user = req.session.userId;
  User.findByIdAndRemove(user)
    .then((deletedUser) => console.log(deletedUser))
    .then(() => req.session.destroy())
    .then(() => res.json({}))
    .catch((error) => console.log(error));
});

module.exports = router;
