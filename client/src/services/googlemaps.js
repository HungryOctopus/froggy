import api from './api';

export const getAllUsers = () => {
  return api.get('/userlist')
    .then((response) => {
      const users = response.data.users;
      return users;
    });
};
