import { Component } from 'react';
import { adminmessage } from './../services/adminmessage';
import { loadAuthenticatedUser } from './../services/authentication';
class AdminMessaging extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      body: '',
      creator: null,
      errors: {},
      success: {}
    };
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;
    // Subject
    if (this.state.subject === '') {
      formIsValid = false;
      errors['subject'] = 'Subject line cannot be empty';
    }
    // Body
    if (this.state.body === '') {
      formIsValid = false;
      errors['body'] = 'Please include a message';
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    if (this.handleValidation()) {
      const { subject, body, creator } = this.state;
      console.log({ subject, body, creator });
      adminmessage({ subject, body, creator }).catch((error) => {
        console.log(error);
      });
      let success = {};
      success['messagesent'] = 'Message sent successfully';
      this.setState({ success: success });
    } else {
    }
  };

  componentDidMount() {
    loadAuthenticatedUser().then((user) => {
      console.log(user.firstName);
      const userFirstName = user.firstName;
      this.setState({
        creator: userFirstName
      });
      return user.firstName;
    });
  }

  render() {
    return (
      <div>
        <section className="py-5 mt-5 header text-center bg-green">
          <div className="container py text-white py-5">
            <h1 className="page-section-heading text-center text-uppercase text-white">
              Send message
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-white"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-chat-right-text-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
            <p className="masthead-subheading fs-4 text-white mb-0">
              Keep the volunteers updated about the latest infos.
            </p>
          </div>
        </section>

        <div className="container d-flex align-items-center flex-column">
          <div className="container">
            <form
              onSubmit={this.handleFormSubmission}
              // style={{ display: 'flex', flexDirection: 'column' }}
            >
              <label htmlFor="input-firstName" className="form-label pt-5 fs-3">
                Subject:
              </label>
              <input
                id="input-subject"
                type="text"
                placeholder="Subject"
                name="subject"
                className="form-control fs-4"
                value={this.state.subject}
                onChange={this.handleInputChange}
              />
              <div>
                <span
                  style={{ color: 'red' }}
                  className="form-label mb-3 pt-3 fs-3"
                >
                  {this.state.errors['subject']}
                </span>
              </div>

              <label htmlFor="input-body" className="form-label mb-3 pt-3 fs-3">
                Your message:
              </label>
              <textarea
                id="input-body"
                type="text"
                placeholder="Dear volunteers ..."
                name="body"
                value={this.state.body}
                className="form-control fs-4"
                rows="8"
                onChange={this.handleInputChange}
              />
              <div>
                <span
                  style={{ color: 'red' }}
                  className="form-label mb-3 pt-3 fs-3"
                >
                  {this.state.errors['body']}
                </span>
              </div>

              <button className="btn btn-lg btn-warning mt-3 mb-5">
                Send message
              </button>
              <div>
                <span
                  style={{ color: 'green' }}
                  className="form-label mb-3 pt-3 fs-3"
                >
                  {this.state.success['messagesent']}
                </span>
              </div>

              <div className="buttonbuffer"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminMessaging;
