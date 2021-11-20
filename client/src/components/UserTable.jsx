import { Component } from "react";
// import USER_LOCATIONS from "../tests/maps_api_test.json";
import { getAllUsers } from "../services/googlemaps";

class UserTable extends Component {
  constructor(props) {
    super();
    this.state = {
      location: {
        lat: 47.97621,
        lng: 7.901442,
      },
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

  getDistance = (latUser, lngUser) => {
    const latLocation = this.state.location.lat;
    const lngLocation = this.state.location.lng;
    const p = 0.017453292519943295; // Math.PI / 180
    const c = Math.cos;
    const a =
      0.5 -
      c((latUser - latLocation) * p) / 2 +
      (c(latLocation * p) *
        c(latUser * p) *
        (1 - c((lngUser - lngLocation) * p))) /
        2;
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * Radius earth (6371)
  };

  render() {
    return (
      <div className="container">
        <table className="table table-light table-striped table-hover user-table">
          <tbody>
            {this.state.users.map((user) => (
              <tr className="user-row" key={user._id}>
                <td>
                  <img
                    className="user-image"
                    style={{ width: "50px" }}
                    src={`../images/avatars/${user.userImage}`}
                    alt={user.fir}
                  />
                </td>
                <td>
                  {user.firstName} {user.secondName}
                </td>
                {(user.location.lat !== null && (
                  <td>
                    {this.getDistance(user.location.lat, user.location.long)}
                  </td>
                )) ||
                  "not set"}
                <td>
                  <button>today's status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;
