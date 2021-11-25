import api from './api';

// ### API call to update user settings ###
export const updateSettings = (body) => {
  return api
    .post('/settings', body)
    .then((response) => {
      console.log(response.data.firstName);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSettings = () => {
  return api
    .get('/settings')
    .then((response) => {
      console.log(response.data.firstName);
    })
    .catch((error) => {
      console.log(error);
    });
};
