import { Component } from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => {
  return <div className="user-marker"></div>;
};
class GoogleMapsSignUp extends Component {
  constructor() {
    super();
    this.state = {
      map: {
        center: {
          lat: 50.0,
          lng: 10.0,
        },
        zoom: 11,
      },
      userMarker: {
        lat: null,
        lng: null,
      },
    };
  }

  onClick = (coordinates) => {
    const { lat, lng } = coordinates;
    console.log(lat, lng);
    this.setState({
      userMarker: {
        lat: lat,
        lng: lng,
      },
    });
  };

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
          defaultCenter={this.state.map.center}
          defaultZoom={this.state.map.zoom}
          onClick={this.onClick}
        >
          <Marker
            lat={this.state.userMarker.lat}
            lng={this.state.userMarker.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapsSignUp;
