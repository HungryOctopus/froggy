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
      // same styling as in the contact form
      <div className="contact-form">
        <div className="container contact-container align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card contact-card pb-5">
              <div className="card-header contact-header">
                <h2>Log in</h2>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmission}>
                  {/* e-mail */}
                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">Email</span>
                    </div>
                    <input
                      id="input-email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <span style={{ color: 'red' }}>
                      {this.state.errors['email']}
                    </span>
                  </div>

                  {/* password */}
                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">Password</span>
                    </div>
                    <input
                      id="input-password"
                      type="password"
                      className="form-control"
                      placeholder="Your Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div>
                    <span style={{ color: 'red' }}>
                      {this.state.errors['password']}
                    </span>
                  </div>
                  <div className="form-group">
                    <button id="contact-msg-btn" type="submit" className="btn">
                      Log In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
