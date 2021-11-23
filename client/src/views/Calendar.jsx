import { Component } from 'react';
import CalendarComponent from 'react-calendar';
import Notification from '../components/Notification';
import DUMMY_NOTIFICATIONS from './../tests/notification_api_test.json';
import { getadminmessage } from './../services/getadminmessage';
class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      day: null,
      notifications: DUMMY_NOTIFICATIONS
    };
  }
  componentDidMount() {
    // console.log(DUMMY_NOTIFICATIONS);
    // console.log(getadminmessage());
    Promise.resolve(getadminmessage())
      .then((notifications) => {
        return this.setState({
          notifications: notifications
        });
      })
      .then(console.log(this.state.notifications));
  }
  onUserClick = (event) => {
    console.log(event);
    const day = JSON.stringify(event);
    this.setState({ day });
  };
  render() {
    return (
      <>
        <header className="masthead bg-white text-dark text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            <h5>Calendar view</h5>
            <div>react calendar package</div>
            <CalendarComponent
              className="calendar"
              onChange={this.onUserClick}
              // value={this.state.value}
            />
            <div>User clicked day:{this.state.day}</div>
            {this.state.notifications.map((el, index) => {
              return <Notification key={index} notification={el} />;
            })}
          </div>
        </header>
      </>
    );
  }
}
export default Calendar;
