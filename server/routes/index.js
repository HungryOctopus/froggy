'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('./../middleware/route-guard');
const User = require('./../models/user');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

// ### POST route update user status ###
router.post('/user-status', (req, res, next) => {
  const { userId, userStatus } = req.body;
  User.findByIdAndUpdate(userId, { onSite: userStatus }, { new: true })
    .then((updatedUser) => res.json(updatedUser))
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
