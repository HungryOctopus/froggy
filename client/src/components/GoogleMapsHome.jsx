import { Component } from "react";
import GoogleMapReact from "google-map-react";
import frogmarker from "../images/frogmarker.png"; // relative path to image

const FrogMarker = () => (
  <div>
    <img id="frog-marker" src={frogmarker} alt="Frog marker" />
  </div>
);

class GoogleMapsHome extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 47.97621,
        lng: 7.901442,
      },
      zoom: 12,
    };
  }

  render() {
    return (
      <div
        style={{
          height: "250px",
          width: "500px",
          border: "1px solid dimgrey",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API,
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <FrogMarker lat={47.9582669} lng={7.9012855} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapsHome;
