'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('./../middleware/route-guard');

// ### Set up nodemailer ###
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Outlook',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

// ### Contact mail route ###
router.post('/contact', (req, res, next) => {
  res.json('contact');
  transporter
    .sendMail({
      to: process.env.MAIL_USER,
      subject: 'Hello my fellow Froggies',
      text: 'quak quak quak'
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
