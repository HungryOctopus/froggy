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
      //, { secure_url: req.file.path });
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
  console.log(req.body);
  const {
    firstName,
    secondName,
    // imageUrl,
    email
    // passwordHashAndSalt: hash,
    // location
  } = req.body;
  // const user = {
  //   firstName,
  //   secondName,
  //   imageUrl,
  //   email,
  // passwordHashAndSalt: hash,
  //   location
  // };
  console.log(firstName);
  User.findByIdAndUpdate(
    req.body.id,
    { firstName, secondName, email },
    { new: true }
  ).then((response) => {
    res.json(response);
    // console.log(response);
  });
});

module.exports = router;
