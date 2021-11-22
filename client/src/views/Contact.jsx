import { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  componentDidMount() {}

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="contact-form">
        <div className="container contact-container">
          <div className="d-flex justify-content-center h-100">
            <div className="card contact-card">
              <div className="card-header contact-header">
                <h2>Contact us</h2>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleFormSubmission}>
                  {/* Name  */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">Your name:</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="input-name"
                      placeholder="name"
                      onChange={this.handleInputChange}
                      value={this.state.name}
                      required
                    />
                  </div>

                  {/* E-mail  */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">
                        Your e-mail address:
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="input-email"
                      placeholder="email"
                      onChange={this.handleInputChange}
                      value={this.state.email}
                      required
                    />
                  </div>

                  {/* Message */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group label-text">
                        Your message:
                      </span>
                    </div>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="message"
                      onChange={this.handleInputChange}
                      value={this.state.message}
                      id="input-message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      id="contact-msg-btn"
                      type="submit"
                      className="btn float-right btn-warning"
                    >
                      Send message!
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

export default Contact;
