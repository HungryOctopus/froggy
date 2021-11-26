import { Component } from "react";
import GoogleMapsSignUp from "../components/GoogleMapsSignUp";
import profilePicture from "../services/profilePicture";
import { updateProfile } from "./../services/authentication";
// import service from './../services/profilePicture';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      imageUrl: "",
      location: { long: null, lat: null },
      distance: null,
      email: "",
      password: "",
      role: "volunteer",
      errors: {},
    };
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

    // First name
    if (this.state.firstName === "") {
      formIsValid = false;
      errors["firstName"] = "Please include your first name";
    }
    // Second name
    if (this.state.secondName === "") {
      formIsValid = false;
      errors["secondName"] = "Please include your last name";
    }
    // Email
    if (this.state.email === "") {
      formIsValid = false;
      errors["email"] = "Email field cannot be empty";
    }

    // Password
    // if (this.state.password.length > 0) {
    //   formIsValid = false;
    //   errors["password"] = "Please choose a secure password";
    // }

    this.setState({ errors: errors });
    return formIsValid;
  }

  componentDidMount() {
    if (this.props.user) {
      const { firstName, secondName, email, location } = this.props.user;
      this.setState({
        firstName,
        secondName,
        email,
        location,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.componentDidMount(this.props.user);
    }
  }

  getUserCoordinates = (coordinates) => {
    const { lat, lng } = coordinates;
    this.setState({
      location: {
        long: lng,
        lat: lat,
      },
    });
    console.log(this.state);
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    if (this.handleValidation()) {
      const {
        firstName,
        secondName,
        // imageUrl,
        email,
        password,
        // role,
        location,
      } = this.state;
      const body = { firstName, secondName, email, password, location };
      console.log(location);
      Promise.resolve(updateProfile(body))
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

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => we pass req.body to .create() method in the POST route
    uploadData.append("imageUrl", e.target.files[0]);

    profilePicture
      .handleUpload(uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ imageUrl: response.secure_url });
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  render() {
    return (
      <div className="contact-form">
        <div className="container contact-container align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card contact-card pb-5">
              <div className="card-header contact-header">
                <h2>Edit your profile</h2>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmission}>
                  {/* First name */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">First name</span>
                    </div>
                    <input
                      id="input-firstName"
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["firstName"]}
                    </span>
                  </div>

                  {/* Last name */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">Last name</span>
                    </div>
                    <input
                      id="input-secondName"
                      type="text"
                      placeholder="Last name"
                      className="form-control"
                      name="secondName"
                      value={this.state.secondName}
                      onChange={this.handleInputChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["secondName"]}
                    </span>
                  </div>

                  {/* E-mail */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">E-mail</span>
                    </div>
                    <input
                      id="input-email"
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["email"]}
                    </span>
                  </div>

                  {/* Password */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">Password</span>
                    </div>
                    <input
                      id="input-password"
                      type="password"
                      placeholder="Change your password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["password"]}
                    </span>
                  </div>

                  {/* Choose profile picture */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">
                        Choose a profile picture
                      </span>
                    </div>
                    <input
                      id="user-image-upload"
                      className="btn"
                      type="file"
                      name="imageUrl"
                      onChange={this.handleFileUpload}
                    />
                  </div>

                  {/* Location on map */}

                  <div>
                    <div className="input-group prepend">
                      <span className="input-group label-text">
                        Where are you located?
                      </span>
                    </div>
                    <GoogleMapsSignUp
                      onGetCoordinates={this.getUserCoordinates}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn">
                      Update Profile
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

export default Settings;
