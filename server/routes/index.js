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

/////// USER SETTINGS //////////

// // ### GET route to show the user settings ###
// router.get('/settings', (req, res, next) => {
//   User.findById({
//     firstName,
//     secondName,
//     //imageUrl,
//     //location,
//     email
//     //passwordHashAndSalt
//   })
//     .then((userdata) => res.json(userdata))
//     .catch((error) => {
//       next(error);
//     });

// // ### PATCH route update user settings ###
// router.patch('/settings', async (req, res, next) => {
//   const {
//     firstName,
//     secondName,
//     //imageUrl,
//     //location,
//     email
//     //passwordHashAndSalt
//   } = req.body;
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.User._id,
//       { firstName, secondName, email }, //imageUrl, location, email, passwordHashAndSalt },
//       { new: true }
//     );
//     res.json({ user });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
