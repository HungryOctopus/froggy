import { Component } from 'react';
import { adminmessage } from './../services/adminmessage';
class AdminMessaging extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      body: '',
      errors: {}
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
      const { subject, body } = this.state;
      console.log({ subject, body });
      adminmessage({ subject, body }).catch((error) => {
        console.log(error);
      });
    } else {
    }
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <header className="masthead bg-orange text-black text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
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
                <span style={{ color: 'red' }}>
                  {this.state.errors['subject']}
                </span>
                <label htmlFor="input-body">Body</label>
                <textarea
                  id="input-body"
                  type="text"
                  placeholder="Dear volunteers ..."
                  name="body"
                  value={this.state.body}
                  onChange={this.handleInputChange}
                />
                <span style={{ color: 'red' }}>
                  {this.state.errors['body']}
                </span>
                <button>Send message</button>
              </form>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default AdminMessaging;
