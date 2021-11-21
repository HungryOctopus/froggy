import { Component } from "react";
import api from "../services/api";
//import mongoose from 'mongoose';

class GetStatistics extends Component {
  constructor() {
    super();
    this.state = {
      statistics: [],
    };
    // this.getStats();
    // api.get('/api/allstats').then((res) => {
    //   console.log(res.data); // res.data is an array of objects, every object is a DailyCatch entry in the DB
    //   this.setState({ statistics: res.data });
    //   console.log(`state: ${this.state}`);
    // let totalfrogsFemaleWayIn = this.state.reduce(function (acc, obj) {
    //   return acc + obj.frogsFemaleWayIn;
    // }, 0);
    // console.log(totalfrogsFemaleWayIn);
    // this.setState({ statistics: res.data });
    // });
  }

  componentDidMount() {
    this.getStats();
  }

  getStats = () => {
    api.get("/api/allstats").then((response) => {
      const allStats = response.data;
      console.log(allStats.data);
      this.setState({ statistics: allStats.data });
    });
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
