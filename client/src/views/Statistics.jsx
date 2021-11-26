import { Component } from "react";

import ChartBar from "../components/ChartBar";
import ChartPie from "../components/ChartPie";
import ChartLine from "../components/ChartLine";
import ChartTotal from "../components/ChartTotal";
import { getAllStats } from "./../services/statistics";
import { getStatsMonths } from "./../services/statistics";
import { getUserDailies } from "./../services/statistics";
import { getUserStats } from "./../services/statistics";
import { setTotalCount } from "./../services/statistics";
import { setMonthlyCount } from "./../services/statistics";
import { setUserTypes } from "./../services/statistics";
import { totalCountState } from "./../services/chart-states";
import { typesUserState } from "./../services/chart-states";
import { userDailyState } from "./../services/chart-states";
import { animalTypesState } from "./../services/chart-states";
import { monthlyCatchState } from "./../services/chart-states";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataTotal: totalCountState(),
      chartDataIndividual: typesUserState(),
      chartDataDaily: userDailyState(),
      chartDataAll: animalTypesState(),
      chartDataMonthlyCount: monthlyCatchState(),
    };
  }

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
        return getUserDailies(this.props.user._id).then((userDailies) =>
          stats.push(userDailies)
        );
      })
      .then(() => {
        return getUserStats(this.props.user._id).then((userStats) => {
          if (userStats) {
            stats.push(userStats);
          }
        });
      })
      .then(() => {
        console.log(this.state);
        this.setState(setTotalCount(stats[0]));
        this.setState(setMonthlyCount(stats[1]));
        this.setState(setUserTypes(stats[3]));
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
              {this.props.user && this.props.user.firstName}:
            </h2>
            <ChartBar chartData={this.state.chartDataIndividual} />
            <h2>
              {this.props.user && this.props.user.firstName}'s daily catches:
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
