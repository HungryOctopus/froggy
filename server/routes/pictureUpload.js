const express = require('express');
const router = express.Router();
// const User = require('./../models/user');
const fileUploader = require('../config/cloudinary.config');

//POST 'api/upload' => Route that will receive an image,
// send it to Cloudinary via the fileUploader
// and return the image URL

router.post('/upload', fileUploader.single('imageUrl'), (req, res, next) => {
  console.log(`file is:`, req.file);

  if (!req.file) {
    next(new Error('No file uploaded'));
    return;
  }
  //get the URL of the uploaded file and send it as a response.
  // 'secure_url" can be any name but must me the same on the
  //front-end

  res.json({ secure_url: req.file.path });
});

module.exports = router;
