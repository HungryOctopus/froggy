import { Component } from "react";
import GoogleMapReact from "google-map-react";
// import USER_LOCATIONS from "../tests/maps_api_test.json";
import frogmarker from "../images/frogmarker.png";
import { getAllUsers } from "../services/googlemaps";

const UserPin = ({ userImg, userName }) => (
  <div>
    {(userImg && <img className="user-pin" src={userImg} alt={userName} />) || (
      <div className="dummy-pin"></div>
    )}
  </div>
);

const FrogMarker = () => (
  <div>
    <img id="frog-marker" src={frogmarker} alt="Frog marker" />
  </div>
);

class GoogleMapsUsermap extends Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 47.97621,
        lng: 7.901442,
      },
      zoom: 12.5,
      users: [],
    };
  }

  componentDidMount() {
    getAllUsers()
      .then((users) => {
        this.setState({ users });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="map-home">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API,
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.state.users.map((user) => (
            <UserPin
              key={user._id}
              lat={user.location.lat}
              lng={user.location.long}
              userName={user.firstName}
              userImg={user.imageUrl}
            />
          ))}
          <FrogMarker lat={47.9582669} lng={7.9012855} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapsUsermap;
