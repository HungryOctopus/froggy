// ############################
// ##  Initial chart states  ##
// ############################

// ### Initial total count state ###
export const totalCountState = () => {
  return {
    labels: " ",
    datasets: [
      {
        data: [0],
        borderColor: "rgba(255, 206, 86, 0.6)",
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };
};

// ### Initial user animal types state ###
export const typesUserState = () => {
  return {
    labels: ["Female frogs", "Male frogs", "Female toads", "Male toads"],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };
};

// ### Initial user daily catch state ###
export const userDailyState = () => {
  return {
    datasets: [
      {
        label: "Female frogs",
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y-axis-1",
      },
      {
        label: "Male frogs",
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
        yAxisID: "y-axis-2",
      },
      {
        label: "Female toads",
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: "rgb(255, 206, 86)",
        borderColor: "rgba(255, 206, 86, 0.2)",
        yAxisID: "y-axis-2",
      },
      {
        label: "Male toads",
        data: [0, 0, 0, 0, 0, 0],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
        yAxisID: "y-axis-2",
      },
    ],
  };
};

// ### Initial animal types state ###
export const animalTypesState = () => {
  return {
    labels: ["Female frogs", "Male frogs", "Female toads", "Male toads"],
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
      },
    ],
  };
};

// ### Initial monthly state ###
export const monthlyCatchState = () => {
  return {
    labels: ["January", "February", "March", "April", "Mai", "June", "July"],
    datasets: [
      {
        label: "Catches",
        data: [0, 0, 0, 0, 0, 0, 0],
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
  };
};
