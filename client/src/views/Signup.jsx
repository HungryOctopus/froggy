import { Component } from 'react';
import GoogleMapsSignUp from '../components/GoogleMapsSignUp';
import { signUp } from './../services/authentication';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      secondName: '',
      // imageUrl: "",
      // location: { long: null, lat: null },
      // distance: null,
      email: '',
      password: '',
      role: 'volunteer'
    };
  }

  componentDidMount() {}

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { firstName, secondName, email, password, role } = this.state;
    signUp({ firstName, secondName, email, password, role })
      .then((user) => {
        this.props.onAuthenticationChange(user);
      })
      .catch((error) => {
        console.log(error);
        // alert('There was an error signing up');
      });
  };

  handleFileUpload = () => {};

  render() {
    return (
      <>
        <h5>Volunteer signup view</h5>
        <div style={{ width: '500px' }}>
          <form
            onSubmit={this.handleFormSubmission}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="input-firstName">First name</label>
            <input
              id="input-firstName"
              type="text"
              placeholder="First name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <label htmlFor="input-firstName">Last name</label>
            <input
              id="input-secondName"
              type="text"
              placeholder="Last name"
              name="secondName"
              value={this.state.secondName}
              onChange={this.handleInputChange}
            />
            <label htmlFor="input-email">Email</label>
            <input
              id="input-email"
              type="email"
              placeholder="Your Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label htmlFor="input-password">Password</label>
            <input
              id="input-password"
              type="password"
              placeholder="A Secure Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <label htmlFor="user-image-upload">Image</label>
            <input
              id="user-image-upload"
              type="file"
              name="imageUrl"
              onChange={this.handleFileUpload}
            />
            <GoogleMapsSignUp />
            <button>Sign Up</button>
          </form>
        </div>
      </>
    );
  }
}

export default Signup;
