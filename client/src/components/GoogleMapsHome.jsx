import { Component } from "react";
import GoogleMapReact from "google-map-react";
import frogmarker from "../images/frogmarker.png"; // relative path to image

const FrogMarker = () => (
  <div>
    <img
      src={frogmarker}
      alt="Frog marker"
      style={{ width: "25px", left: "1000px" }}
    />
  </div>
);

class GoogleMapsHome extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 47.95821,
        lng: 7.901442,
      },
      zoom: 11,
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
          <FrogMarker lat={this.state.center.lat} lng={this.state.center.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapsHome;
