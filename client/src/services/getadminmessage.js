import api from './api';

export const getadminmessage = () => {
  return api.get('/adminmessagesall').then((response) => {
    const data = response.data;
    return data;
  });
};
