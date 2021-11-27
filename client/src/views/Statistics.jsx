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
        <section className="py-5 mt-5 header text-center bg-green">
          <div className="container mt-5 text-white py-3">
            <h1 className="page-section-heading text-center text-uppercase text-white">
              Your statistics
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-white"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-bar-chart-line-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
          </div>
        </section>

        <div className="container-fluid container-stats">
          <div className="row row-stats">
            <div className="col stats-col">
              <div className="card stats-card">
                <h2 className="stats-title">
                  Animal types saved by{" "}
                  {this.props.user && this.props.user.firstName}:
                </h2>
                <ChartBar chartData={this.state.chartDataIndividual} />
              </div>
            </div>
            <div className="col stats-col">
              <div className="card stats-card">
                <h2 className="stats-title">
                  {this.props.user && this.props.user.firstName}'s daily
                  catches:
                </h2>
                <ChartLine chartData={this.state.chartDataDaily} />
              </div>
            </div>
          </div>
        </div>

        <section className="py-5 header text-center bg-green">
          <div className="container text-white py-3">
            <h1 className="page-section-heading text-center text-uppercase text-white">
              Statistics of the group
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-white"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-pie-chart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
          </div>
        </section>

        <div className="container-fluid container-stats">
          <div className="row row-stats">
            <div className="col stats-col">
              <div className="card stats-card">
                <h2 className="stats-title">
                  Group's monthly amount of saved animals:
                </h2>
                <ChartBar chartData={this.state.chartDataMonthlyCount} />
              </div>
            </div>

            <div className="col stats-col">
              <div className="card stats-card">
                <h2 className="stats-title">Total amount of saved animals:</h2>
                <ChartTotal chartData={this.state.chartDataTotal} />
              </div>
            </div>
          </div>
          <div className="row row-stats">
            <div className="col stats-col">
              <div className="card stats-card">
                <h2 className="stats-title">
                  Animal types saved by the group:
                </h2>
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
