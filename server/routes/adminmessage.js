const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const AdminMessage = require('../models/message');
// POST route to create a new admin message
router.post('/adminmessage', (req, res, next) => {
  const { subject, body, creator } = req.body;
  AdminMessage.create({
    subject,
    body,
    creator
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});
// GET route to get all messages (displayed on calendar page)
router.get('/adminmessagesall', (req, res, next) => {
  AdminMessage.find({})
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
