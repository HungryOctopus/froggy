import { Component } from "react";
import GoogleMapsHome from "../components/GoogleMapsHome";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h5>Home view</h5>
        <div>Google maps api: event location</div>
        <GoogleMapsHome />
      </>
    );
  }
}

export default Home;
