import api from "./api";

export const signUp = (body) => {
  return api.post("/sign-up", body).then((response) => {
    // window.location.href = '/counter';
    const data = response.data;
    const user = data.user;
    return user;
  });
};

export const signIn = (body) =>
  api.post("/sign-in", body).then((response) => response.data.user);

export const signOut = () => {
  return api.post("/sign-out");
};

export const loadAuthenticatedUser = () => {
  return api.get("/me").then((response) => response.data.user);
};

export const updateProfile = (body) => {
  return api.post("/update", body).then((response) => response.data);
};

export const deleteProfile = () => {
  return api.post("/delete").then((response) => response.data);
};
