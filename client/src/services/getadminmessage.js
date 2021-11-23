import api from './api';
// export const getadminmessage = () => {
//   return api.get('/adminmessagesall').then((response) => {
//     const data = response.data;
//     return data;
//   });
// };
export const getadminmessage = () => {
  return api
    .get('/adminmessagesall')
    .then((response) => {
      //   console.log(response.data);
      let messageArray = response.data;
      return messageArray;
    })
    .catch((error) => {
      console.log(error);
    });
};
