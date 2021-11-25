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

export const getStatsMonths = () => {
  return api
    .get("/stats-months")
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

export const setMonthlyCount = (data) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const chartMonths = [];
  for (let i = 6; i >= 0; i--) {
    chartMonths.push(months[new Date().getMonth() - i]);
  }
  return {
    chartDataMonthlyCount: {
      labels: chartMonths,
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
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
