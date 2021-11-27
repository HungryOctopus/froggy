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
      } else res.json([0, 0, 0, 0]);
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
      } else res.json();
    })
    .catch((error) => {
      console.log(error);
    });
});

// ### GET route => get monthly group stats ###
router.get('/stats-months', (req, res, next) => {
  const month = new Date().getMonth() + 1;
  const monthResults = [];
  return DailyCatch.find({
    $expr: {
      $eq: [{ $month: '$createdAt' }, month - 6]
    }
  })
    .then((data) => {
      monthResults.push(sumUpAnimals(data));
      return DailyCatch.find({
        $expr: {
          $eq: [{ $month: '$createdAt' }, month - 5]
        }
      });
    })
    .then((data) => {
      monthResults.push(sumUpAnimals(data));
      return DailyCatch.find({
        $expr: {
          $eq: [{ $month: '$createdAt' }, month - 4]
        }
      });
    })
    .then((data) => {
      monthResults.push(sumUpAnimals(data));
      return DailyCatch.find({
        $expr: {
          $eq: [{ $month: '$createdAt' }, month - 3]
        }
      });
    })
    .then((data) => {
      monthResults.push(sumUpAnimals(data));
      return DailyCatch.find({
        $expr: {
          $eq: [{ $month: '$createdAt' }, month - 2]
        }
      });
    })
    .then((data) => {
      monthResults.push(sumUpAnimals(data));
      return DailyCatch.find({
        $expr: {
          $eq: [{ $month: '$createdAt' }, month - 1]
        }
      });
    })
    .then((data) => {
      monthResults.push(sumUpAnimals(data));
      return DailyCatch.find({
        $expr: {
          $eq: [{ $month: '$createdAt' }, month]
        }
      });
    })
    .then((data) => {
      monthResults.push(sumUpAnimals(data));
    })
    .then(() => res.json(monthResults))
    .catch((error) => {
      console.log(error);
    });
});

// ### POST route => get daily user stats ###
router.post('/stats-daily', (req, res, next) => {
  const { user } = req.body;
  const sumTypesArr = [[], [], [], []];
  let date1 = new Date();
  let date2 = new Date();
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  date1.setDate(date1.getDate() - 5);
  date2.setDate(date2.getDate() - 4);
  return DailyCatch.find({
    volunteer: user,
    createdAt: {
      $gte: date1,
      $lt: date2
    }
  })
    .then((result) => {
      const resultArr = (result.length && sumUpTypes(result)) || [0, 0, 0, 0];
      resultArr.forEach((el, i) => sumTypesArr[i].push(el));
    })
    .then(() => {
      date1 = new Date();
      date2 = new Date();
      date1.setHours(0, 0, 0, 0);
      date2.setHours(0, 0, 0, 0);
      date1.setDate(date1.getDate() - 4);
      date2.setDate(date2.getDate() - 3);
      return DailyCatch.find({
        volunteer: user,
        createdAt: {
          $gte: date1,
          $lt: date2
        }
      });
    })
    .then((result) => {
      const resultArr = (result.length && sumUpTypes(result)) || [0, 0, 0, 0];
      resultArr.forEach((el, i) => sumTypesArr[i].push(el));
    })
    .then(() => {
      date1 = new Date();
      date2 = new Date();
      date1.setHours(0, 0, 0, 0);
      date2.setHours(0, 0, 0, 0);
      date1.setDate(date1.getDate() - 3);
      date2.setDate(date2.getDate() - 2);
      return DailyCatch.find({
        volunteer: user,
        createdAt: {
          $gte: date1,
          $lt: date2
        }
      });
    })
    .then((result) => {
      const resultArr = (result.length && sumUpTypes(result)) || [0, 0, 0, 0];
      resultArr.forEach((el, i) => sumTypesArr[i].push(el));
    })
    .then(() => {
      date1 = new Date();
      date2 = new Date();
      date1.setHours(0, 0, 0, 0);
      date2.setHours(0, 0, 0, 0);
      date1.setDate(date1.getDate() - 2);
      date2.setDate(date2.getDate() - 1);
      return DailyCatch.find({
        volunteer: user,
        createdAt: {
          $gte: date1,
          $lt: date2
        }
      });
    })
    .then((result) => {
      const resultArr = (result.length && sumUpTypes(result)) || [0, 0, 0, 0];
      resultArr.forEach((el, i) => sumTypesArr[i].push(el));
    })
    .then(() => {
      date1 = new Date();
      date2 = new Date();
      date1.setHours(0, 0, 0, 0);
      date2.setHours(0, 0, 0, 0);
      date1.setDate(date1.getDate() - 1);
      date2.setDate(date2.getDate() - 0);
      return DailyCatch.find({
        volunteer: user,
        createdAt: {
          $gte: date1,
          $lt: date2
        }
      });
    })
    .then((result) => {
      const resultArr = (result.length && sumUpTypes(result)) || [0, 0, 0, 0];
      resultArr.forEach((el, i) => sumTypesArr[i].push(el));
    })
    .then(() => {
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      console.log(date);
      return DailyCatch.find({
        volunteer: user,
        createdAt: {
          $gte: date
        }
      });
    })
    .then((result) => {
      console.log(result);
      const resultArr = (result.length && sumUpTypes(result)) || [0, 0, 0, 0];
      resultArr.forEach((el, i) => sumTypesArr[i].push(el));
    })
    .then(() => {
      return res.json(sumTypesArr);
    });
});

// ### Total sum of helped animals ###
const sumUpAnimals = (list) => {
  const summedUp = list.reduce((prev, curr) => {
    return {
      frogsFemaleWayIn: prev.frogsFemaleWayIn + curr.frogsFemaleWayIn,
      frogsFemaleWayBack: prev.frogsFemaleWayBack + curr.frogsFemaleWayBack,
      frogsMaleWayIn: prev.frogsMaleWayIn + curr.frogsMaleWayIn,
      frogsMaleWayBack: prev.frogsMaleWayBack + curr.frogsMaleWayBack,
      toadsFemaleWayIn: prev.toadsFemaleWayIn + curr.toadsFemaleWayIn,
      toadsFemaleWayBack: prev.toadsFemaleWayBack + curr.toadsFemaleWayBack,
      toadsMaleWayIn: prev.toadsMaleWayIn + curr.toadsMaleWayIn,
      toadsMaleWayBack: prev.toadsMaleWayBack + curr.toadsMaleWayBack
    };
  });
  const amountAnimals =
    summedUp.frogsFemaleWayIn +
    summedUp.frogsFemaleWayBack +
    summedUp.frogsMaleWayIn +
    summedUp.frogsMaleWayBack +
    summedUp.toadsFemaleWayIn +
    summedUp.toadsFemaleWayBack +
    summedUp.toadsMaleWayIn +
    summedUp.toadsMaleWayBack;
  return amountAnimals;
};

// ### Total sum of helped animals by type ###
const sumUpTypes = (list) => {
  const summedUp = list.reduce((prev, curr) => {
    return {
      frogsFemaleWayIn: prev.frogsFemaleWayIn + curr.frogsFemaleWayIn,
      frogsFemaleWayBack: prev.frogsFemaleWayBack + curr.frogsFemaleWayBack,
      frogsMaleWayIn: prev.frogsMaleWayIn + curr.frogsMaleWayIn,
      frogsMaleWayBack: prev.frogsMaleWayBack + curr.frogsMaleWayBack,
      toadsFemaleWayIn: prev.toadsFemaleWayIn + curr.toadsFemaleWayIn,
      toadsFemaleWayBack: prev.toadsFemaleWayBack + curr.toadsFemaleWayBack,
      toadsMaleWayIn: prev.toadsMaleWayIn + curr.toadsMaleWayIn,
      toadsMaleWayBack: prev.toadsMaleWayBack + curr.toadsMaleWayBack
    };
  });
  const amountAnimals = [
    summedUp.frogsFemaleWayIn + summedUp.frogsFemaleWayBack,
    summedUp.frogsMaleWayIn + summedUp.frogsMaleWayBack,
    summedUp.toadsFemaleWayIn + summedUp.toadsFemaleWayBack,
    summedUp.toadsMaleWayIn + summedUp.toadsMaleWayBack
  ];
  return amountAnimals;
};

module.exports = router;
