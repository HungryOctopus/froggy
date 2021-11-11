import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMapsHome extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 47.95821,
        lng: 7.901442
      },
      zoom: 11
    };
  }

  render() {
    return (
      <div
        style={{
          height: '250px',
          width: '500px',
          border: '1px solid dimgrey'
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapsHome;
