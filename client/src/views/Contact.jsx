import { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="contact-form">
        <div className="container">
          <div className="d-flex justify-content-center p-5 m-5 h-100">
            <div className="card">
              <div className="card-header">
                <h3>Contact us</h3>
              </div>
              <div className="card-body">
                <form method="POST">
                  {/* Name  */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group text">Your name:</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="input-name"
                      placeholder="name"
                      required
                    />
                  </div>

                  {/* E-mail  */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group text">
                        Your e-mail address:
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="input-email"
                      placeholder="email"
                      required
                    />
                  </div>

                  {/* Do we need that?  */}

                  {/* <div className="input-group prepend">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="input-subject"
                      placeholder="subject"
                      required
                    />
                    <label htmlFor="input-subject">
                      What can we help you with?
                    </label>
                  </div> */}

                  {/* Message */}

                  <div className="input-group form-group">
                    <div className="input-group prepend">
                      <span className="input-group text">Your message:</span>
                    </div>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="message"
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
