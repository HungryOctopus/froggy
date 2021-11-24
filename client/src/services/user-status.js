import api from "./api";

// ### API call to update user status ###
export const updateUserStatus = (body) => {
  return api
    .post("/user-status", body)
    .then((response) => {
      // console.log(response.data.firstName, response.data.onSite);
    })
    .catch((error) => {
      console.log(error);
    });
};
