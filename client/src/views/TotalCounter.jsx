import React, { Component } from 'react';
import CountInput from '../components/CountInput';

export class TotalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FrogsFemaleWayIn: 0,
      FrogsMaleWayIn: 0,
      ToadsFemaleWayIn: 0,
      ToadsMaleWayIn: 0,
      FrogsFemaleWayBack: 0,
      FrogsMaleWayBack: 0,
      ToadsFemaleWayBack: 0,
      ToadsMaleWayBack: 0
    };
  }

  componentDidMount() {
    // Call a service that loads the current
    // wayInFrogs and wayBackToads for date today
    // and sets those values in the state
  }

  handleCountChange = (value, statePropName) => {
    this.setState({ [statePropName]: value });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    // Call a service that submits the counts held in the state
    // to the REST API.
    // If there is a count record document for the authenticated user
    // in which date is today,
    // update that document with new counts
    // otherwise, create new document with counts and date today
  };

  render() {
    return (
      <div>
        <h2>Way in</h2>

        <form onSubmit={this.handleFormSubmission}>
          <CountInput
            name="Female frogs"
            count={this.state.frogsfemalewayin}
            onCountChange={(value) =>
              this.handleCountChange(value, 'FrogsFemaleWayIn')
            }
          />

          <CountInput
            name="Male frogs"
            count={this.state.frogsmalewayin}
            onCountChange={(value) =>
              this.handleCountChange(value, 'FrogsMaleWayIn')
            }
          />

          <CountInput
            name="Female toads"
            count={this.state.toadsfemalewayin}
            onCountChange={(value) =>
              this.handleCountChange(value, 'ToadsFemaleWayIn')
            }
          />

          <CountInput
            name="Male toads"
            count={this.state.toadsmalewayin}
            onCountChange={(value) =>
              this.handleCountChange(value, 'ToadsMaleWayIn')
            }
          />

          <h2>Way back</h2>

          <CountInput
            name="Female frogs"
            count={this.state.frogsfemalewayback}
            onCountChange={(value) =>
              this.handleCountChange(value, 'FrogsFemaleWayBack')
            }
          />

          <CountInput
            name="Male frogs"
            count={this.state.frogsmalewayback}
            onCountChange={(value) =>
              this.handleCountChange(value, 'FrogsMaleWayBack')
            }
          />

          <CountInput
            name="Female toads"
            count={this.state.toadsfemalewayback}
            onCountChange={(value) =>
              this.handleCountChange(value, 'ToadsFemaleWayBack')
            }
          />

          <CountInput
            name="Male toads"
            count={this.state.toadsmalewayback}
            onCountChange={(value) =>
              this.handleCountChange(value, 'ToadsMaleWayBack')
            }
          />

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default TotalCounter;
