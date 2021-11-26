import { Component } from "react";

import ChartBar from "../components/ChartBar";
import ChartPie from "../components/ChartPie";
import ChartLine from "../components/ChartLine";
import ChartTotal from "../components/ChartTotal";

import {
  totalCountState,
  typesUserState,
  userDailyState,
  animalTypesState,
  monthlyCatchState,
} from "./../services/chart-states";

import {
  getAllStats,
  getStatsMonths,
  getUserDailies,
  getUserStats,
  setTotalCount,
  setMonthlyCount,
  setUserDailies,
  setUserTypes,
} from "./../services/statistics";

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
        this.setState(setTotalCount(stats[0]));
        this.setState(setMonthlyCount(stats[1]));
        this.setState(setUserDailies(stats[2]));
        this.setState(setUserTypes(stats[3]));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="container-fluid container-stats mt-4">
          <div className="row row-stats">
            <div className="col stats-col">
              <div className="card stats-card">
                <h2>Total amount of saved animals:</h2>
                <ChartTotal chartData={this.state.chartDataTotal} />
              </div>
            </div>
            <div className="col stats-col">
              <div className="card stats-card">
                <h2>
                  Animal types saved by{" "}
                  {this.props.user && this.props.user.firstName}:
                </h2>
                <ChartBar chartData={this.state.chartDataIndividual} />
              </div>
            </div>
            <div className="col stats-col">
              <div className="card stats-card">
                <h2>
                  {this.props.user && this.props.user.firstName}'s daily
                  catches:
                </h2>
                <ChartLine chartData={this.state.chartDataDaily} />
              </div>
            </div>
            <div className="col stats-col">
              <div className="card stats-card">
                <h2>Group's monthly amount of saved animals:</h2>
                <ChartBar chartData={this.state.chartDataMonthlyCount} />
              </div>
            </div>
            <div className="col stats-col">
              <div className="card stats-card">
                <h2>Animal types saved by the group:</h2>
                <ChartPie chartData={this.state.chartDataAll} />
              </div>
            </div>
            <div className="col stats-col d-none d-lg-block"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Statistics;
