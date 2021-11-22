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
      <div className="row pb-2">
        <div className="col-md-12">
          <label className="form-label">{this.props.name}</label>
        </div>
        <div className="col-md-6 align-right">
          <input
            type="number"
            min={0}
            name={this.props.name}
            value={this.state.count}
            className="form-control lg"
            onChange={(e) => this.handleChange(e.target.valueAsNumber)}
          />
        </div>
        <div className="col-md-3 justify-content-right">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={() => this.handleChange(this.state.count + 1)}
            // maybe a high limit? More than 200 animals shouldn't go through or at least be checked
          >
            +
          </button>
        </div>
        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={() => this.handleChange(this.state.count - 1)}
            //here a logic should be added so the number is not negative
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default CountInput;
