import { Component } from 'react';

class FrogCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      temperature: '',
      wayinfrogs: 0,
      wayinfrogscouple: 0,
      wayintoadsmale: 0,
      wayintoadsfemale: 0,
      wayintoadscouple: 0,
      waybackfrogs: 0,
      waybackfrogscouple: 0,
      waybacktoadsmale: 0,
      waybacktoadsfemale: 0,
      waybacktoadscouple: 0
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert('Thank you. Your form has been submitted');
    event.preventDefault();
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h5>Frog Counter</h5>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            {/* Possible to add automatically the name? */}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Outside temperature:
            <input
              type="text"
              name="temperature"
              value={this.state.temperature}
              onChange={this.handleChange}
            />
          </label>
          <h6>
            <b>Way in</b>
          </h6>
          <label>
            Frogs
            <input
              type="number"
              name="wayinfrogs"
              value={this.state.wayinfrogs}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Couple frogs
            <input
              type="number"
              name="wayinfrogscouple"
              value={this.state.wayinfrogscouple}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female toads
            <input
              type="number"
              name="wayintoadsfemale"
              value={this.state.wayintoadsfemale}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Male toads
            <input
              type="number"
              name="wayintoadsmale"
              value={this.state.wayintoadsmale}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Couple toads
            <input
              type="number"
              name="wayintoadscouple"
              value={this.state.wayintoadscouple}
              onChange={this.handleChange}
            />
          </label>
          <h6>
            <b>Way back</b>
          </h6>
          <label>
            Frogs
            <input
              type="number"
              name="waybackfrogs"
              value={this.state.waybackfrogs}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Couple frogs
            <input
              type="number"
              name="waybackfrogscouple"
              value={this.state.waybackfrogscouple}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female toads
            <input
              type="number"
              name="waybacktoadsfemale"
              value={this.state.waybacktoadsfemale}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Male toads
            <input
              type="number"
              name="waybacktoadsmale"
              value={this.state.waybacktoadsmale}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Couple toads
            <input
              type="number"
              name="waybacktoadscouple"
              value={this.state.waybacktoadscouple}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default FrogCounter;
