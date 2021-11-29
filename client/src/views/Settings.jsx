import { Component } from "react";
import { Redirect } from "react-router";
import GoogleMapsSignUp from "../components/GoogleMapsSignUp";
import profilePicture from "../services/profilePicture";
import { updateProfile } from "./../services/authentication";
import { deleteProfile } from "./../services/authentication";

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

      redirect: false,
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
      const { firstName, secondName, imageUrl, email, location } =
        this.props.user;
      this.setState({
        firstName,
        secondName,
        imageUrl,
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
        imageUrl,
        email,
        password,
        // role,
        location,
      } = this.state;
      const body = {
        firstName,
        secondName,
        imageUrl,
        email,
        password,
        location,
      };
      Promise.resolve(updateProfile(body))
        .then((user) => {
          this.props.onAuthenticationChange(user);
          alert("Thank you. Your profile has been updated.");
          this.setState({ redirect: true });
        })
        .catch((error) => {
          console.log(error);
          // alert('There was an error signing up');
        });
    } else {
      // alert("Form has errors.");
    }
  };

  deleteUserProfile = () => {
    deleteProfile();
    window.location.href = "/signup";
  };

  handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
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
    {
      const redirecthome = this.state.redirect;
      if (redirecthome) {
        return <Redirect to="/" />;
      }
    }
    return (
      <div className="contact-form">
        <div className="container contact-container align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <div className="card contact-card pb-5">
              <div className="card-header contact-header d-flex flex-column align-items-center justify-content-center">
                <h2>Welcome, {this.state.firstName}</h2>

                {/* Display profile picture */}

                <div className="d-flex flex-column justify-content-center">
                  <div className="d-flex flex-row justify-content-center m-2">
                    {this.state.imageUrl ? (
                      <img
                        className="user-image-settings m-2 justify-content-center"
                        src={this.state.imageUrl}
                        alt="profile"
                      />
                    ) : (
                      <img
                        className="dummy-avatar-settings m-2 justify-content-center"
                        src="./images/froggy.png"
                        alt="frog"
                      />
                    )}
                  </div>

                  {/* Choose / change profile picture */}

                  <div className="input-group form-group d-flex flex-row justify-content-center">
                    <span className="input-group label-text justify-content-center">
                      {this.state.imageUrl
                        ? `Change your profile picture`
                        : `Choose a profile picture`}
                    </span>

                    <input
                      id="user-image-upload"
                      className="btn"
                      type="file"
                      name="imageUrl"
                      onChange={this.handleFileUpload}
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h3 className="text-white">Here you can edit your profile</h3>
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
                <button
                  className="btn delete-profile"
                  onClick={this.deleteUserProfile}
                >
                  Delete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
