'use strict';

const express = require('express');
// const User = require('./../models/user');
const router = express.Router();
const mongoose = require('mongoose');
const DailyCatch = require('./../models/dailyCatch');

// POST route to create new statistics
router.post('/stats', (req, res, next) => {
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
  console.log(frogsFemaleWayIn);
  console.log(frogsMaleWayIn);
  DailyCatch.create({
    // volunteer: req.user._id,
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
  })
    .then((response) => res.json(response))
    .catch((error) => {
      res.json(error);
    });
});

// GET route => to get all the statistics
router.get('/stats', (req, res, next) => {
  DailyCatch.find()
    .then((allTheStats) => res.json(allTheStats))
    .catch((err) => res.json(err));
});

module.exports = router;
