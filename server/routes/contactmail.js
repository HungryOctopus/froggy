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
  const { name, email, message } = req.body;
  console.log(name, email, message);
  res.json('The email was sent.');
  transporter
    .sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `${name}: Hello my fellow Froggies!`,
      html: `${email}<br><i color="green">${message}</i>`
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
