import { Component } from 'react';
import GoogleMapsHome from '../components/GoogleMapsHome';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <header className="masthead bg-white text-dark text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            <h5>Home view</h5>
            <div>Google maps api: event location</div>
            <GoogleMapsHome />
          </div>
        </header>
      </>
    );
  }
}

export default Home;
