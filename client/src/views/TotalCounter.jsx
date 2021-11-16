import axios from 'axios';
import React, { Component } from 'react';
import CountInput from '../components/CountInput';
// import { addStatistic } from './../services/statistics';

class TotalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frogsFemaleWayIn: 0,
      frogsMaleWayIn: 0
      // toadsFemaleWayIn: 0,
      // toadsMaleWayIn: 0,
      // frogsFemaleWayBack: 0,
      // frogsMaleWayBack: 0,
      // toadsFemaleWayBack: 0,
      // toadsMaleWayBack: 0
    };
  }

  // componentDidMount() {
  //   // Call a service that loads the current
  //   // wayInFrogs and wayBackToads for date today
  //   // and sets those values in the state
  // };

  handleCountChange = (value, statePropName) => {
    console.log('handleCountChange:', value, statePropName);
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
    const FrogsFemaleWayIn = this.state.frogsFemaleWayIn;
    const FrogsMaleWayIn = this.state.frogsMaleWayIn;
    // const allAnimals = this.state;
    //console.log(allAnimals);
    axios
      .post('http://localhost:5000/api/stats', {
        FrogsFemaleWayIn,
        FrogsMaleWayIn
        //allAnimals
      })
      .then(() => {
        //what does it mean?
        this.setState({ frogsFemaleWayIn: '', frogsMaleWayIn: '' });
        // console.log(allAnimals);
      })

      .catch((error) => {
        alert('There was an error submitting the data');
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2>Way in</h2>

        <form onSubmit={this.handleFormSubmission}>
          <CountInput
            name="Female frogs"
            count={this.state.frogsFemaleWayIn}
            onCountChange={(value) =>
              this.handleCountChange(value, 'frogsFemaleWayIn')
            }
          />

          <CountInput
            name="Male frogs"
            count={this.state.frogsMaleWayIn}
            onCountChange={(value) =>
              this.handleCountChange(value, 'frogsMaleWayIn')
            }
          />

          <CountInput
            name="Female toads"
            count={this.state.toadsFemaleWayIn}
            onCountChange={(value) =>
              this.handleCountChange(value, 'toadsFemaleWayIn')
            }
          />

          <CountInput
            name="Male toads"
            count={this.state.toadsMaleWayIn}
            onCountChange={(value) =>
              this.handleCountChange(value, 'toadsMaleWayIn')
            }
          />

          <h2>Way back</h2>

          <CountInput
            name="Female frogs"
            count={this.state.frogsFemaleWayBack}
            onCountChange={(value) =>
              this.handleCountChange(value, 'frogsFemaleWayBack')
            }
          />

          <CountInput
            name="Male frogs"
            count={this.state.frogsMaleWayBack}
            onCountChange={(value) =>
              this.handleCountChange(value, 'frogsMaleWayBack')
            }
          />

          <CountInput
            name="Female toads"
            count={this.state.toadsFemaleWayBack}
            onCountChange={(value) =>
              this.handleCountChange(value, 'toadsFemaleWayBack')
            }
          />

          <CountInput
            name="Male toads"
            count={this.state.toadsMaleWayBack}
            onCountChange={(value) =>
              this.handleCountChange(value, 'toadsMaleWayBack')
            }
          />

          <button type="button" onClick={this.handleFormSubmission}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TotalCounter;
