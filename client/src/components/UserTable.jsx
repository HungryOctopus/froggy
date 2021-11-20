import { Component } from "react";
// import USER_LOCATIONS from "../tests/maps_api_test.json";
import { getAllUsers } from "../services/googlemaps";

class UserTable extends Component {
  constructor(props) {
    super();
    this.state = {
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
      <div>
        <table className="table table-light table-hover">
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user._id}>
                <td>
                  <img
                    style={{ width: "50px" }}
                    src={`../images/avatars/${user.userImage}`}
                    alt={user.fir}
                  />
                </td>
                <td>
                  {user.firstName} {user.secondName}
                </td>
                <td>{user.distance}</td>
                <td>
                  <button>avi</button>
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
