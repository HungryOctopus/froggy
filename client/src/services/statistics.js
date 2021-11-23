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
  return api
    .post("/stats-user", body)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllStats = () => {
  return api
    .get("/stats-all")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const setTotalCount = (data) => {
  return {
    chartDataAll: {
      datasets: [
        {
          data: [
            data.frogsFemaleWayIn + data.frogsFemaleWayBack,
            data.frogsMaleWayIn + data.frogsMaleWayBack,
            data.toadsFemaleWayIn + data.toadsFemaleWayBack,
            data.toadsMaleWayIn + data.toadsMaleWayBack,
          ],
        },
      ],
    },
    chartDataTotal: {
      datasets: [
        {
          data: [
            data.frogsFemaleWayIn +
              data.frogsFemaleWayBack +
              data.frogsMaleWayIn +
              data.frogsMaleWayBack +
              data.toadsFemaleWayIn +
              data.toadsFemaleWayBack +
              data.toadsMaleWayIn +
              data.toadsMaleWayBack,
          ],
        },
      ],
    },
  };
};

export const setUserTypes = (data) => {
  return {
    chartDataIndividual: {
      datasets: [
        {
          data: [
            data.frogsFemaleWayIn + data.frogsFemaleWayBack,
            data.frogsMaleWayIn + data.frogsMaleWayBack,
            data.toadsFemaleWayIn + data.toadsFemaleWayBack,
            data.toadsMaleWayIn + data.toadsMaleWayBack,
          ],
        },
      ],
    },
  };
};
