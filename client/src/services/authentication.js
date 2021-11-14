import api from './api';

export const signUp = (body) => {
  return api.post('/authentication/sign-up', body).then((response) => {
    window.location.href = '/counter';
    const data = response.data;
    const user = data.user;
    return user;
  });
};
