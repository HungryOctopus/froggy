// ### Cron job script to reset user states daily ###
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const User = require('./../models/user');

const MONGODB_URI = process.env.MONGODB_URI;

const resetUserStates = () => {
  // Update all users that have their state set to true
  return User.updateMany({ onSite: true }, { $set: { onSite: false } })
    .then(() => console.log('All user states are set to false'))
    .catch((error) => {
      console.log('Error loading available users');
      console.log(error);
    });
};

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    return resetUserStates();
  })
  .catch((error) => {
    console.error('Error connecting the database');
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    mongoose.disconnect();
  });
