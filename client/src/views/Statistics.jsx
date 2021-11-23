import { Component } from "react";

import ChartBar from "../components/ChartBar";
import ChartPie from "../components/ChartPie";
import ChartLine from "../components/ChartLine";
import ChartTotal from "../components/ChartTotal";
import { loadAuthenticatedUser } from "./../services/authentication";
import { getUserStats } from "./../services/statistics";
import { getAllStats } from "./../services/statistics";
import { setTotalCount } from "./../services/statistics";
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
          this.setState(setUserTypes(data));
        });
      })
      .then(() => {
        return getAllStats().then((data) => {
          this.setState(setTotalCount(data));
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
              Animal types saved by{" "}
              {this.state.user && this.state.user.firstName}:
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
