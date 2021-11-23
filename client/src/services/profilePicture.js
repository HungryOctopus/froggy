import axios from 'axios';

const profilePicture = axios.create({
  baseURL: 'http://localhost:5000/api'
  //process.env.REACT_APP_API_URL
  // withCredentials: true
});

const errorHandler = (err) => {
  throw err;
};

const handleUpload = (file) => {
  return profilePicture
    .post('/upload', file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const saveNewPicture = (newPicture) => {
  return profilePicture
    .post('/upload/newPicture', newPicture)
    .then((res) => res.data)
    .catch(errorHandler);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  profilePicture,
  handleUpload,
  saveNewPicture
};
