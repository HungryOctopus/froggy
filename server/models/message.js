'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  subject: {
    type: String,
    trim: true,
    required: true,
    maxlength: 140
  },
  body: {
    type: String,
    trim: true,
    maxlength: 5000
  },
  creator: {
    type: String,
    required: true
  }
  // date: {
  //   type: Date,
  //   required: true
  // },
  // recipient: {
  //   userIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  // }
});

const Message = mongoose.model('Message', schema);

module.exports = Message;
