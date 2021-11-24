'use strict';

const express = require('express');
const router = express.Router();
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
router.get('/allstats', (req, res, next) => {
  DailyCatch.find()
    .sort({ createdAt: 1 })
    .then((data) => {
      res.json({ data });
    })
    .catch((error) => {
      next(error);
    });
});

// ### POST route => get user statistics ###
router.post('/stats-user', (req, res, next) => {
  const { user } = req.body;
  return DailyCatch.find({
    volunteer: user
  })
    .then((list) => {
      if (list.length) {
        const summedUp = list.reduce((prev, curr) => {
          return {
            frogsFemaleWayIn: prev.frogsFemaleWayIn + curr.frogsFemaleWayIn,
            frogsFemaleWayBack:
              prev.frogsFemaleWayBack + curr.frogsFemaleWayBack,
            frogsMaleWayIn: prev.frogsMaleWayIn + curr.frogsMaleWayIn,
            frogsMaleWayBack: prev.frogsMaleWayBack + curr.frogsMaleWayBack,
            toadsFemaleWayIn: prev.toadsFemaleWayIn + curr.toadsFemaleWayIn,
            toadsFemaleWayBack:
              prev.toadsFemaleWayBack + curr.toadsFemaleWayBack,
            toadsMaleWayIn: prev.toadsMaleWayIn + curr.toadsMaleWayIn,
            toadsMaleWayBack: prev.toadsMaleWayBack + curr.toadsMaleWayBack
          };
        });
        res.json(summedUp);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// ### GET route => get all statistics ###
router.get('/stats-all', (req, res, next) => {
  return DailyCatch.find()
    .then((list) => {
      if (list.length) {
        const summedUp = list.reduce((prev, curr) => {
          return {
            frogsFemaleWayIn: prev.frogsFemaleWayIn + curr.frogsFemaleWayIn,
            frogsFemaleWayBack:
              prev.frogsFemaleWayBack + curr.frogsFemaleWayBack,
            frogsMaleWayIn: prev.frogsMaleWayIn + curr.frogsMaleWayIn,
            frogsMaleWayBack: prev.frogsMaleWayBack + curr.frogsMaleWayBack,
            toadsFemaleWayIn: prev.toadsFemaleWayIn + curr.toadsFemaleWayIn,
            toadsFemaleWayBack:
              prev.toadsFemaleWayBack + curr.toadsFemaleWayBack,
            toadsMaleWayIn: prev.toadsMaleWayIn + curr.toadsMaleWayIn,
            toadsMaleWayBack: prev.toadsMaleWayBack + curr.toadsMaleWayBack
          };
        });
        res.json(summedUp);
      } else return;
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
