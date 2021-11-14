import { Component } from 'react';
import { signIn } from './../services/authentication';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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
    const { email, password } = this.state;
    signIn({ email, password })
      .then((user) => {
        this.props.onAuthenticationChange(user);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <label htmlFor="input-password">Password</label>
            <input
              id="input-password"
              type="password"
              placeholder="Your Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button>Log In</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
