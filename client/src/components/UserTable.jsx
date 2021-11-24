import { Component } from "react";
// import USER_LOCATIONS from "../tests/maps_api_test.json";
import { getAllUsers } from "../services/googlemaps";
import { updateUserStatus } from "./../services/user-status";

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

  // ### Calculate distance user/location ###
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
    return 12742 * Math.asin(Math.sqrt(a)) > 10
      ? Math.round(12742 * Math.asin(Math.sqrt(a)))
      : (12742 * Math.asin(Math.sqrt(a))).toFixed(1); // 2 * Radius earth (6371)
  };

  // ### Switch user status ###
  setUserStatus = (event) => {
    const arraykey = event.target.attributes[0].value;
    let newarr = [...this.state.users];
    const status = newarr[arraykey].onSite;
    status === false
      ? (newarr[arraykey].onSite = true)
      : (newarr[arraykey].onSite = false);
    Promise.resolve(
      this.setState({
        users: newarr,
      })
    ).then(() => {
      const body = {
        userId: newarr[arraykey]._id,
        userStatus: this.state.users[arraykey].onSite,
      };
      updateUserStatus(body);
    });
  };

  render() {
    return (
      <div className="container">
        <br />
        <h5>Would you like to help today? Your status resets at midnight.</h5>
        <table className="table table-light table-striped table-hover user-table">
          <tbody>
            {this.state.users.map((user, index) => (
              <tr className="user-row" key={user._id}>
                {(user.userImage && (
                  <td>
                    <img
                      className="user-image"
                      src={`../images/avatars/${user.userImage}`}
                      alt={user.fir}
                    />
                  </td>
                )) || (
                  <td className="dummy-avatar">
                    <div>
                      <img src="./images/froggy.png" alt="" />
                    </div>
                  </td>
                )}
                <td>
                  {user.firstName} {user.secondName}
                </td>
                {(user.location.lat !== null && (
                  <td>
                    {this.getDistance(user.location.lat, user.location.long)} km
                    away
                  </td>
                )) || <td>not set</td>}
                <td>
                  {(user.onSite && (
                    <img
                      className="frog-status"
                      src="./images/frog_true.png"
                      alt="_true"
                    />
                  )) || (
                    <img
                      className="frog-status"
                      src="./images/frog_false.png"
                      alt="_false"
                    />
                  )}
                </td>
                <td>
                  <button
                    arraykey={index}
                    className="status-button btn btn-outline-dark shadow-none"
                    onClick={this.setUserStatus}
                    style={{
                      backgroundColor: user.onSite
                        ? "rgb(149, 198, 10)"
                        : "lightgrey",
                      fontWeight: user.onSite ? "bold" : "normal",
                      fontSize: user.onSite && "1.2em",
                      textShadow:
                        user.onSite &&
                        "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black",
                      color: user.onSite ? "white" : "black",
                    }}
                  >
                    {(user.onSite && "I'm in") || "not today"}
                  </button>
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
