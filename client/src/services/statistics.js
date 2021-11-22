import api from "./api";

export const addStatistic = (body) => {
  api.post("/stats", body).then((response) => {
    const data = response.data;
    const femaleFrogsWayIn = data.femaleFrogsWayIn;
    return femaleFrogsWayIn;
  });
};

export const getUserStats = (userId) => {
  const body = { user: userId };
  return api.post("/stats-user", body).then((response) => {
    // console.log(response);
    return response;
  });
};
