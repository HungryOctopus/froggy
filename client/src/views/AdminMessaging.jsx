import { Component } from 'react';

class AdminMessaging extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      body: '',
      creator: '',
      date: '',
      errors: {}
    };
  }

  handleValidation() {
    let errors = {};
    let formIsValid = true;

    // Subject
    if (this.state.subject === '') {
      formIsValid = false;
      errors['email'] = 'Subject line cannot be empty';
    }

    // Body
    if (this.state.body === '') {
      formIsValid = false;
      errors['password'] = 'Please include a message';
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

  componentDidMount() {}

  render() {
    return (
      <>
        <h5>Admin Messaging Dashboard</h5>
        <div style={{ width: '500px' }}>
          <form
            onSubmit={this.handleFormSubmission}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="input-firstName">Subject</label>
            <input
              id="input-subject"
              type="text"
              placeholder="Subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
            />
            <span style={{ color: 'red' }}>{this.state.errors['subject']}</span>
            <label htmlFor="input-body">Body</label>
            <textarea
              id="input-body"
              type="text"
              placeholder="Dear volunteers ..."
              name="body"
              value={this.state.body}
              onChange={this.handleInputChange}
            />
            <span style={{ color: 'red' }}>{this.state.errors['body']}</span>
            <button>Send message</button>
          </form>
        </div>
      </>
    );
  }
}

export default AdminMessaging;
