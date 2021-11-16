'use strict';

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const dailyCatchSchema = new Schema({
  volunteer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    //required: true
  },
  date: {
    type: Date.now
    //required: truex
    // default: Date.now
  },

  frogsFemaleWayIn: {
    type: Number,
    min: 0
  },
  frogsMaleWayIn: {
    type: Number,
    min: 0
  }

  // toadsFemaleWayIn: Number,
  // toadsMaleWayIn: Number,
  // frogsFemaleWayBack: Number,
  // frogsMaleWayBack: Number,
  // toadsFemaleWayBack: Number,
  // toadsMaleWayBack: Number
});

const DailyCatch = model('DailyCatch', dailyCatchSchema);

module.exports = DailyCatch;
