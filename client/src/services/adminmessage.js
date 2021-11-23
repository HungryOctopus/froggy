import api from './api';

export const adminmessage = (data) => {
  return api
    .post('/adminmessage', data)
    .then((response) => response.data.adminMessage);
};
