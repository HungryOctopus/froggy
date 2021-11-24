'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('../middleware/route-guard');
const User = require('./../models/user');

router.get('/userlist', (req, res, next) => {
  User.find()
    .sort({ firstName: 1 })
    .then((users) => {
      res.json({ users });
      // console.log(users);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
