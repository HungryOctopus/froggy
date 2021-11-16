import { Component } from 'react';
import { signIn } from './../services/authentication';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

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
      const { email, password } = this.state;
      signIn({ email, password })
        .then((user) => {
          this.props.onAuthenticationChange(user);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // alert('Form has errors.');
    }
  };

  render() {
    return (
      <>
        <h5>Login view</h5>
        <div style={{ width: '500px' }}>
          <form
            onSubmit={this.handleFormSubmission}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
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
              placeholder="Your Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <span style={{ color: 'red' }}>
              {this.state.errors['password']}
            </span>
            <button>Log In</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
