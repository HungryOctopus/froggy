import { Component } from "react";

import ChartBar from "../components/ChartBar";
import ChartPie from "../components/ChartPie";
import ChartLine from "../components/ChartLine";
import ChartTotal from "../components/ChartTotal";
import { loadAuthenticatedUser } from "./../services/authentication";
import { getUserStats } from "./../services/statistics";
import { getAllStats } from "./../services/statistics";
import { getStatsMonths } from "./../services/statistics";
import { setTotalCount } from "./../services/statistics";
import { setMonthlyCount } from "./../services/statistics";
import { setUserTypes } from "./../services/statistics";
import { totalCountState } from "./../services/chart-states";
import { typesUserState } from "./../services/chart-states";
import { userDailyState } from "./../services/chart-states";
import { animalTypesState } from "./../services/chart-states";
import { monthlyCatchState } from "./../services/chart-states";

class Statistics extends Component {
  state = {
    user: null,
    chartDataTotal: totalCountState(),
    chartDataIndividual: typesUserState(),
    chartDataDaily: userDailyState(),
    chartDataAll: animalTypesState(),
    chartDataMonthlyCount: monthlyCatchState(),
  };

  componentDidMount() {
    let stats = [];
    getAllStats()
      .then((dataAll) => {
        return stats.push(dataAll);
      })
      .then(() => {
        return getStatsMonths().then((dataMonths) => stats.push(dataMonths));
      })
      .then(() => {
        return loadAuthenticatedUser()
          .then((user) => {
            this.setState({
              user: user,
            });
            return user;
          })
          .then((user) => {
            return getUserStats(user._id).then((userStats) => {
              if (userStats) {
                stats.push(userStats);
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .then(() => {
        this.setState(setTotalCount(stats[0]));
        this.setState(setMonthlyCount(stats[1]));
        this.setState(setUserTypes(stats[2]));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <header className="masthead bg-white text-dark text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            <h2>Total amount of saved animals:</h2>
            <ChartTotal chartData={this.state.chartDataTotal} />
            <h2>
              Animal types saved by{" "}
              {this.state.user && this.state.user.firstName}:
            </h2>
            <ChartBar chartData={this.state.chartDataIndividual} />
            <h2>
              {this.state.user && this.state.user.firstName}'s daily catches:
            </h2>
            <ChartLine chartData={this.state.chartDataDaily} />
            <h2>Group's monthly amount of saved animals:</h2>
            <ChartBar chartData={this.state.chartDataMonthlyCount} />
            <h2>Animal types saved by the group:</h2>
            <ChartPie chartData={this.state.chartDataAll} />
          </div>
        </header>
      </>
    );
  }
}

export default Statistics;
