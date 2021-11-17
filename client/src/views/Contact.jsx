import { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <header className="masthead bg-primary text-white text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            Contact view
            <form method="POST">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="input-name"
                  placeholder="name"
                  required
                />
                <label htmlFor="input-name">Your full name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="input-email"
                  placeholder="email"
                  required
                />
                <label htmlFor="input-email">Your email address</label>
              </div>
              <div className="form-floating mb-3">
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
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="message"
                  id="input-message"
                  required
                ></textarea>
                <label htmlFor="input-message">Your message</label>
              </div>

              <button
                id="contact-msg-btn"
                type="submit"
                className="btn btn-warning"
              >
                Send message!
              </button>
            </form>
          </div>
        </header>
      </>
    );
  }
}

export default Contact;
