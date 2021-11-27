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
      <>
        <section className="py-5 mt-5 header text-center bg-green">
          <div className="container-fluid text-white px-0 py-3">
            <h1 className="page-section-heading text-center text-uppercase text-white">
              Volunteer map
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-white"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fillRule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
            <p className="masthead-subheading fs-4 text-white mb-0">
              Check out the other volunteers near you
            </p>
          </div>
        </section>

        <div className="container-fluid px-0">
          <GoogleMapsUsermap />
        </div>

        <section className="mb-5 header text-center bg-green">
          <div className="container text-white py-2">
            {/* <p className="masthead-subheading fs-4 text-white mb-0">
              Would you like to help today? Your status resets at midnight.
            </p> */}
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-white"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-bucket-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
            <p className="masthead-subheading fs-4 text-white mb-2">
              Would you like to help today? Your status resets at midnight.
            </p>
          </div>
        </section>

        <UserTable user={this.props.user} />
      </>
    );
  }
}

export default Users;
