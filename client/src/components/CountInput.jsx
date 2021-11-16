import { Component } from 'react';

class CountInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleChange = (value) => {
    this.setState({ count: value });
    this.props.onCountChange(value);
  };

  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <input
            type="number"
            min={0}
            name={this.props.name}
            value={this.state.count}
            onChange={(e) => this.handleChange(e.target.valueAsNumber)}
          />

          <button
            type="button"
            onClick={() => this.handleChange(this.state.count + 1)}
            // maybe a high limit? More than 200 animals shouldn't go through or at least be checked
          >
            +
          </button>

          <button
            type="button"
            onClick={() => this.handleChange(this.state.count - 1)}
            //here a logic should be added so the number is not negative
          >
            -
          </button>
        </label>
      </div>
    );
  }
}

export default CountInput;
