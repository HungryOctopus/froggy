import { Component } from 'react';
import GoogleMapsUsermap from '../components/GoogleMapsUsermap';

class Statistics extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h5>Statistics view</h5>
        <div>Google maps api: map all users</div>
        <GoogleMapsUsermap />
      </>
    );
  }
}

export default Statistics;
