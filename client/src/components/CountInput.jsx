import { Component } from 'react';

class CountInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleChange = (event) => {
    this.setState({ count: event.target.valueAsNumber });
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <label>
          {this.props.name}
          <input
            type="number"
            name={this.props.name}
            value={this.state.count}
            onChange={(e) => this.handleChange(e)}
          />
          {/* onDecrement={this.handleDecrement} */}
          <button
            type="button"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>

          <button
            type="button"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
        </label>
      </div>
    );
  }
}

export default CountInput;
