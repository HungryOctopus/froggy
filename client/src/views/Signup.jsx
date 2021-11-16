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
      role: 'volunteer',
      errors: {}
    };
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

    // First name
    if (this.state.firstName === '') {
      formIsValid = false;
      errors['firstName'] = 'Please include your first name';
    }
    // Second name
    if (this.state.secondName === '') {
      formIsValid = false;
      errors['secondName'] = 'Please include your last name';
    }
    // Email
    if (this.state.email === '') {
      formIsValid = false;
      errors['email'] = 'Email field cannot be empty';
    }

    // Password
    if (this.state.password === '') {
      formIsValid = false;
      errors['password'] = 'Please include your password';
    }

    this.setState({ errors: errors });
    return formIsValid;
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
    if (this.handleValidation()) {
      const { firstName, secondName, email, password, role } = this.state;
      signUp({ firstName, secondName, email, password, role })
        .then((user) => {
          this.props.onAuthenticationChange(user);
        })
        .catch((error) => {
          console.log(error);
          // alert('There was an error signing up');
        });
    } else {
      // alert("Form has errors.");
    }
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
            <span style={{ color: 'red' }}>
              {this.state.errors['firstName']}
            </span>
            <label htmlFor="input-firstName">Last name</label>
            <input
              id="input-secondName"
              type="text"
              placeholder="Last name"
              name="secondName"
              value={this.state.secondName}
              onChange={this.handleInputChange}
            />
            <span style={{ color: 'red' }}>
              {this.state.errors['secondName']}
            </span>
            <label htmlFor="input-email">Email</label>
            <input
              id="input-email"
              type="email"
              placeholder="Your Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <span style={{ color: 'red' }}>{this.state.errors['email']}</span>
            <label htmlFor="input-password">Password</label>
            <input
              id="input-password"
              type="password"
              placeholder="A Secure Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <span style={{ color: 'red' }}>
              {this.state.errors['password']}
            </span>
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
