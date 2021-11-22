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
        <div className="container contact-container">
          <div className="d-flex justify-content-center h-100">
            <div className="card contact-card">
              <div className="card-header contact-header">
                <h2>Contact us</h2>
              </div>
              <div className="card-body">
                <form method="POST">
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
