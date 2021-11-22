import { Component } from "react";
import api from "../services/api";
//import mongoose from 'mongoose';

class GetStatistics extends Component {
  constructor() {
    super();
    this.state = {
      statistics: [],
      totalFFWI: 0,
    };
  }

  componentDidMount() {
    this.getStats();
  }

  componentDidUpdate() {
    //  this.addStats();
  }

  getStats = () => {
    api
      .get("/allstats")
      .then((response) => {
        const allStats = response.data;
        console.log(allStats.data);
        this.setState({ statistics: allStats.data });
        console.log(this.state.statistics);
      })
      .then(this.addStats);
  };

  addStats = () => {
    const sumFrogs = this.state.statistics.reduce((a, b) => ({
      frogsFemaleWayIn: a.frogsFemaleWayIn + b.frogsFemaleWayIn,
    }));
    console.log(sumFrogs.frogsFemaleWayIn); // how to add this value in the state and exploit it???
  };

  render() {
    return (
      <div>
        <p>test (this should map the data) </p>
        {this.state.statistics.map((stat) => (
          <h4 key={stat._id}>{stat.frogsFemaleWayIn}</h4>
        ))}
      </div>
    );
  }
}

export default GetStatistics;
