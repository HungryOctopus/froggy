const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const AdminMessage = require('../models/message');
// POST route to create a new admin message
router.post('/adminmessage', (req, res, next) => {
  const { subject, body } = req.body;
  AdminMessage.create({
    subject,
    body
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// router.get('/adminmessage', (req, res) =>
//   res.send('admin messaging route testing!')
// );

module.exports = router;
