'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  eventDate: {
    type: Date,
    required: true
  },
  participants: {
    userIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  }
});

const Event = mongoose.model('Event', schema);

module.exports = Event;
