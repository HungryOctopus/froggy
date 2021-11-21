'use strict';

const express = require('express');
const User = require('./../models/user');
const router = express.Router();
const mongoose = require('mongoose');
const routeGuard = require('../middleware/route-guard');
const DailyCatch = require('./../models/dailyCatch');

router.get('/stats', (req, res, next) => {
  DailyCatch.findOne({
    volunteer: req.user._id,
    createdAt: {
      $gte: new Date(new Date() - (new Date() % (24 * 60 * 60 * 1000)))
    }
  })
    .then((dailyCatch) => res.json({ dailyCatch }))
    .catch((error) => {
      res.json(error);
    });
});

// POST route to create new statistics
router.post('/stats', routeGuard, (req, res, next) => {
  console.log('BODY:', req.body);
  const {
    //way in
    frogsFemaleWayIn,
    frogsMaleWayIn,
    toadsFemaleWayIn,
    toadsMaleWayIn,
    //way back
    frogsFemaleWayBack,
    frogsMaleWayBack,
    toadsFemaleWayBack,
    toadsMaleWayBack
  } = req.body;
  const data = {
    volunteer: req.user._id,
    // BEARER TOKEN & API ? Middleware
    //way in
    frogsFemaleWayIn,
    frogsMaleWayIn,
    toadsFemaleWayIn,
    toadsMaleWayIn,
    //way back
    frogsFemaleWayBack,
    frogsMaleWayBack,
    toadsFemaleWayBack,
    toadsMaleWayBack
  };
  // console.log();
  // console.log(frogsMaleWayIn);
  // console.log('DATA', data);
  // console.log('USER', req.user._id);

  DailyCatch.findOneAndUpdate(
    {
      volunteer: req.user._id,
      createdAt: {
        $gte: new Date(new Date() - (new Date() % (24 * 60 * 60 * 1000)))
      }
    },
    data,
    { new: true }
  )
    .then((dailyCatch) => {
      if (dailyCatch) {
        res.json(dailyCatch);
      } else {
        return DailyCatch.create(data);
      }
    })
    .then((response) => res.json(response))
    .catch((error) => {
      res.json(error);
    });
});

// GET route => to get all the statistics
// router.get('/stats', (req, res, next) => {
//   DailyCatch.find()
//     .then((allTheStats) => res.json(allTheStats))
//     .catch((err) => res.json(err));
// });

module.exports = router;
