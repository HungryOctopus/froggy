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
    return 12742 * Math.asin(Math.sqrt(a)) > 10
      ? Math.round(12742 * Math.asin(Math.sqrt(a)))
      : (12742 * Math.asin(Math.sqrt(a))).toFixed(1); // 2 * Radius earth (6371)
  };

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
    ).then(() => console.log(this.state.users[arraykey].onSite));
  };

  render() {
    return (
      <div className="container">
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
                <td>{(user.onSite && "true") || "false"}</td>
                <td>
                  <button arraykey={index} onClick={this.setUserStatus}>
                    today's status
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
