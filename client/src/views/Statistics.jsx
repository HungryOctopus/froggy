import { Component } from "react";

import ChartBar from "../components/ChartBar";
import ChartPie from "../components/ChartPie";
import ChartLine from "../components/ChartLine";
import ChartTotal from "../components/ChartTotal";
import { loadAuthenticatedUser } from "./../services/authentication";
import { getUserStats } from "./../services/statistics";
import { getAllStats } from "./../services/statistics";

class Statistics extends Component {
  state = {
    user: null,

    // const labels = Utils.months({count: 7});
    chartDataTotal: {
      labels: " ",
      datasets: [
        {
          // label: "Total count",
          data: [6000],
          borderColor: "rgba(255, 206, 86, 0.6)",
          backgroundColor: "rgba(255, 206, 86, 0.6)",
        },
      ],
    },
    chartDataIndividual: {
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
    },
    chartDataDaily: {
      labels: ["01/03", "02/03", "03/03", "04/03", "05/03", "06/03"],
      datasets: [
        {
          label: "frogs",
          data: [23, 35, 58, 79, 123, 201],
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
          yAxisID: "y-axis-1",
        },
        {
          label: "toads",
          data: [36, 59, 82, 126, 212, 245],
          fill: false,
          backgroundColor: "rgb(54, 162, 235)",
          borderColor: "rgba(54, 162, 235, 0.2)",
          yAxisID: "y-axis-2",
        },
      ],
    },
    chartDataAll: {
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
    },
    chartDataMonthlyCount: {
      labels: ["January", "February", "March", "April", "Mai", "June", "July"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
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

  componentDidMount() {
    // this.getChartData();
    loadAuthenticatedUser()
      .then((user) => {
        this.setState({
          user: user,
        });
        return user;
      })
      .then((user) => {
        return getUserStats(user._id).then((data) => {
          // console.log(data);
          this.setState({
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
          });
        });
      })
      .then(() => {
        return getAllStats().then((data) => {
          this.setState({
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
          });
        });
      });
  }

  getChartData() {
    this.setState({});
  }

  render() {
    return (
      <>
        <header className="masthead bg-white text-dark text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            <br />
            <h2>Total amount of saved animals:</h2>
            <ChartTotal chartData={this.state.chartDataTotal} />
            <br />
            <h2>
              Animals saved by {this.state.user && this.state.user.firstName}:
            </h2>
            <ChartBar chartData={this.state.chartDataIndividual} />
            <br />
            <h2>
              {this.state.user && this.state.user.firstName}'s daily catches:
            </h2>
            <ChartLine chartData={this.state.chartDataDaily} />
            <br />
            <h2>Animal types saved by the group:</h2>
            <ChartPie chartData={this.state.chartDataAll} />
            <br />
            <h2>Group's monthly amount of saved animals:</h2>
            <ChartBar chartData={this.state.chartDataMonthlyCount} />
            <br />
          </div>
        </header>
      </>
    );
  }
}

export default Statistics;
