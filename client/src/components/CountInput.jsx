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
          <label className="form-label text-dark fs-4">{this.props.name}</label>
        </div>
        <div className="col-5 col-md-6 align-items-center">
          <input
            type="number"
            min={0}
            name={this.props.name}
            value={this.state.count}
            className="form-control fs-3 lg"
            onChange={(e) => this.handleChange(e.target.valueAsNumber)}
          />
        </div>
        <div className="col-2 col-md-3 justify-content-right">
          <button
            type="button"
            className="btn btn-success btn-lg fs-3"
            onClick={() => this.handleChange(this.state.count + 1)}
            // maybe a high limit? More than 200 animals shouldn't go through or at least be checked
          >
            +
          </button>
        </div>
        <div className="col-2 col-md-3">
          <button
            type="button"
            className="btn btn-danger btn-lg fs-3"
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
