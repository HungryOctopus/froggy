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
    type: Date
    //required: true
    // default: Date.now
  },
  // AnimalCount: {
  FrogsFemaleWayIn: {
    type: Number,
    min: 0
  }
  // FrogsMaleWayIn: Number,
  // ToadsFemaleWayIn: Number,
  // ToadsMaleWayIn: Number,
  // FrogsFemaleWayBack: Number,
  // FrogsMaleWayBack: Number,
  // ToadsFemaleWayBack: Number,
  // ToadsMaleWayBack: Number
  // }
});

const DailyCatch = model('DailyCatch', dailyCatchSchema);

module.exports = DailyCatch;
