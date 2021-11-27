// import axios from "axios";
import React, { Component } from "react";
import CountInput from "../components/CountInput";
import api from "../services/api";
import { Redirect } from "react-router-dom";
// import Alert from 'react-bootstrap/Alert';

class TotalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // way in
      frogsFemaleWayIn: 0,
      frogsMaleWayIn: 0,
      toadsFemaleWayIn: 0,
      toadsMaleWayIn: 0,
      // way back
      frogsFemaleWayBack: 0,
      frogsMaleWayBack: 0,
      toadsFemaleWayBack: 0,
      toadsMaleWayBack: 0,

      redirect: false,
    };
  }

  // componentDidMount() {
  //   // Call a service that loads the current
  //   // wayInFrogs and wayBackToads for date today
  //   // and sets those values in the state
  // };

  handleCountChange = (value, statePropName) => {
    console.log("handleCountChange:", value, statePropName);
    this.setState({ [statePropName]: value });
  };

  // Function handleFormSubmission ==> submits the counts held in the state
  // to the REST API.
  //TODO:
  // If there is a count record document for the authenticated user
  // in which date is today,
  // update that document with new counts
  // otherwise, create new document with counts and date today
  handleFormSubmission = (event) => {
    event.preventDefault();
    //way in
    const frogsFemaleWayIn = this.state.frogsFemaleWayIn;
    const frogsMaleWayIn = this.state.frogsMaleWayIn;
    const toadsFemaleWayIn = this.state.toadsFemaleWayIn;
    const toadsMaleWayIn = this.state.toadsMaleWayIn;
    //way back
    const frogsFemaleWayBack = this.state.frogsFemaleWayBack;
    const frogsMaleWayBack = this.state.frogsMaleWayBack;
    const toadsFemaleWayBack = this.state.toadsFemaleWayBack;
    const toadsMaleWayBack = this.state.toadsMaleWayBack;

    api
      .post("/stats", {
        //way in
        frogsFemaleWayIn,
        frogsMaleWayIn,
        toadsFemaleWayIn,
        toadsMaleWayIn,
        //way back
        frogsFemaleWayBack,
        frogsMaleWayBack,
        toadsFemaleWayBack,
        toadsMaleWayBack,
      })
      .then((response) => {
        //Link is not working, why...?
        console.log(response);
        alert("Thanks for your hard work");
        this.setState({ redirect: true });
      })

      .catch((error) => {
        alert("There was an error submitting the data");
        console.log(error);
      });
  };

  render() {
    {
      const redirecthome = this.state.redirect;
      if (redirecthome) {
        return <Redirect to="/" />;
      }
    }
    return (
      <div className="container-fluid px-0 mb-5 pb-5">
        <section className="py-5 mt-5 header text-center bg-green">
          <div className="container py text-white py-5">
            <h1 className="page-section-heading text-center text-uppercase text-white">
              AMPHIBIAN COUNTER
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-white"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="white"
                  className="bi bi-bucket-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
            <p className="masthead-subheading fs-4 text-white mb-0">
              Count the toads and frogs
            </p>
          </div>
        </section>

        <div className="container-fluid container-stats">
          <div className="row row-stats">
            <div className="col stats-col">
              <div className="card stats-card">
                <h2 className="stats-title">Way in</h2>
                <div className="col">
                  <form onSubmit={this.handleFormSubmission}>
                    <CountInput
                      name="Female frogs"
                      count={this.state.frogsFemaleWayIn}
                      onCountChange={(value) =>
                        this.handleCountChange(value, "frogsFemaleWayIn")
                      }
                    />

                    <CountInput
                      name="Male frogs"
                      count={this.state.frogsMaleWayIn}
                      onCountChange={(value) =>
                        this.handleCountChange(value, "frogsMaleWayIn")
                      }
                    />

                    <CountInput
                      name="Female toads"
                      count={this.state.toadsFemaleWayIn}
                      onCountChange={(value) =>
                        this.handleCountChange(value, "toadsFemaleWayIn")
                      }
                    />

                    <CountInput
                      name="Male toads"
                      count={this.state.toadsMaleWayIn}
                      onCountChange={(value) =>
                        this.handleCountChange(value, "toadsMaleWayIn")
                      }
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="col stats-col">
              <div className="card stats-card">
                <h2 className="stats-title">Way back</h2>

                <CountInput
                  name="Female frogs"
                  count={this.state.frogsFemaleWayBack}
                  onCountChange={(value) =>
                    this.handleCountChange(value, "frogsFemaleWayBack")
                  }
                />

                <CountInput
                  name="Male frogs"
                  count={this.state.frogsMaleWayBack}
                  onCountChange={(value) =>
                    this.handleCountChange(value, "frogsMaleWayBack")
                  }
                />

                <CountInput
                  name="Female toads"
                  count={this.state.toadsFemaleWayBack}
                  onCountChange={(value) =>
                    this.handleCountChange(value, "toadsFemaleWayBack")
                  }
                />

                <CountInput
                  name="Male toads"
                  count={this.state.toadsMaleWayBack}
                  onCountChange={(value) =>
                    this.handleCountChange(value, "toadsMaleWayBack")
                  }
                />
              </div>
            </div>

            <div className="col stats-col">
              <div className="card stats-card">
                <button
                  type="button"
                  className="btn btn-lg btn-warning"
                  onClick={this.handleFormSubmission}
                >
                  Submit your catches
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalCounter;
