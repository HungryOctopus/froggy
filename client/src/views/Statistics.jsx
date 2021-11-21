import { Component } from 'react';

import IndividualChart from '../components/IndividualChart';
import AllFiguresChart from '../components/AllFiguresChart';
import GetStatistics from '../components/GetStatistics';

class Statistics extends Component {
  state = {
    chartDataIndividual: {},
    chartDataAll: {}
  };

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartDataIndividual: {
        labels: ['Female frogs', 'Male frogs', 'Female Toads', 'Male toads'],
        datasets: [
          {
            data: [28, 35, 57, 98],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)'
            ]
          }
        ]
      },
      chartDataAll: {
        labels: ['01/03', '02/03', '03/03', '04/03', '05/03', '06/03'],
        datasets: [
          {
            label: 'frogs',
            data: [23, 35, 58, 79, 123, 201],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1'
          },
          {
            label: 'toads',
            data: [36, 59, 82, 126, 212, 245],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2'
          }
        ]
      }
    });
  }

  render() {
    return (
      <>
        <header className="masthead bg-white text-dark text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            <h2>Animals saved by you:</h2>
            <IndividualChart chartData={this.state.chartDataIndividual} />

            <h2>Complete statistics:</h2>
            <AllFiguresChart chartData={this.state.chartDataAll} />
          </div>
        </header>
        <GetStatistics />;
      </>
    );
  }
}

export default Statistics;
