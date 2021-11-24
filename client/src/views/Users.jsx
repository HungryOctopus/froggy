import { Component } from "react";
import GoogleMapsUsermap from "../components/GoogleMapsUsermap";
import UserTable from "../components/UserTable";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="pb-5">
        <h5>Statistics view</h5>
        <div>Google maps api: map all users</div>
        <GoogleMapsUsermap />
        <UserTable user={this.props.user} />
      </div>
    );
  }
}

export default Users;
