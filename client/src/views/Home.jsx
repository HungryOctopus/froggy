import { Component } from "react";
// import GoogleMapsHome from "../components/GoogleMapsHome";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/* Masthead */}
        <header className="masthead bg-white text-dark text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column mt-5 pt-5">
            {/* <!-- Masthead Avatar Image--> */}
            <img
              className="masthead-avatar mb-5"
              src="./images/froggy.png"
              alt="froggy"
            />
            {/* <!-- Masthead Heading--> */}
            <h1 className="masthead-heading text-uppercase text-green mb-0">
              CATCH 'EM ALL
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#95c60a"
                  className="bi bi-bucket-fill"
                  viewBox="0 0.5 16 16"
                >
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z" />
                </svg>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Masthead Subheading--> */}
            <p className="masthead-subheading font-weight-light mb-0">
              Join our volunteer team and bring frogs and toads safe to the
              lake!
            </p>
          </div>
        </header>

        {/* <div>
          Google maps api: event location
          <GoogleMapsHome />
        </div> */}
      </>
    );
  }
}

export default Home;
