import { Component } from 'react';

class AdminMessaging extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <h5>Admin Messaging view, visible only to the admin</h5>
        <div>Form to message users will go here</div>
      </>
    );
  }
}

export default AdminMessaging;
