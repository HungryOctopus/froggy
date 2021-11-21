'use strict';

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const dailyCatchSchema = new Schema({
  volunteer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  //Way in
  frogsFemaleWayIn: {
    type: Number,
    min: 0
  },
  frogsMaleWayIn: {
    type: Number,
    min: 0
  },
  toadsFemaleWayIn: {
    type: Number,
    min: 0
  },
  toadsMaleWayIn: {
    type: Number,
    min: 0
  },
  //Way back
  frogsFemaleWayBack: {
    type: Number,
    min: 0
  },

  frogsMaleWayBack: {
    type: Number,
    min: 0
  },

  toadsFemaleWayBack: {
    type: Number,
    min: 0
  },

  toadsMaleWayBack: {
    type: Number,
    min: 0
  }
});

const DailyCatch = model('DailyCatch', dailyCatchSchema);

module.exports = DailyCatch;
