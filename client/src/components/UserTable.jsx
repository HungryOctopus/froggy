import { Component } from "react";
import USER_LOCATIONS from "../tests/maps_api_test.json";

class UserTable extends Component {
  constructor(props) {
    super();
    this.state = {
      users: USER_LOCATIONS,
    };
  }

  render() {
    return <div>UserTable</div>;
  }
}

export default UserTable;
