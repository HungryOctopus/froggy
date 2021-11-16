import { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        Contact view
        <form method="POST">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="name"
              id="input-name"
              placeholder="name"
              required
            />
            <label for="input-name">Your full name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              name="email"
              id="input-email"
              placeholder="email"
              required
            />
            <label for="input-email">Your email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="subject"
              id="input-subject"
              placeholder="subject"
              required
            />
            <label for="input-subject">What can we help you with?</label>
          </div>

          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              name="message"
              placeholder="message"
              id="input-message"
              required
            ></textarea>
            <label for="input-message">Your message</label>
          </div>

          <button id="contact-msg-btn" type="submit" class="btn btn-warning">
            Send message!
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
