// import axios from "axios";
import React, { Component } from "react";
import CountInput from "../components/CountInput";
import api from "../services/api";
// import { addStatistic } from './../services/statistics';

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

    console.log(frogsFemaleWayIn);
    console.log(frogsMaleWayIn);
    api
      .post("/api/stats", {
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
        console.log(response);
        //Redirect here?
      })

      .catch((error) => {
        alert("There was an error submitting the data");
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <header className="masthead bg-green text-white text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            <h2>Way in</h2>

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

              <h2>Way back</h2>

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

              <button type="button" onClick={this.handleFormSubmission}>
                Submit
              </button>
            </form>
          </div>
        </header>
      </>
    );
  }
}

export default TotalCounter;
