'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  secondName: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    long: Number,
    lat: Number
  },
  distance: {
    km: Number
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHashAndSalt: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['volunteer', 'admin'],
    required: true
  },
  maleFrogs: {
    count: Number
  },
  femaleFrogs: {
    count: Number
  },
  maleToads: {
    count: Number
  },
  femaleToads: {
    count: Number
  }
});

const User = mongoose.model('User', schema);

module.exports = User;
