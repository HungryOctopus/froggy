import { Component } from "react";
import CalendarComponent from "react-calendar";
import Notification from "../components/Notification";
import DUMMY_NOTIFICATIONS from "./../tests/notification_api_test.json";
import { getadminmessage } from "./../services/getadminmessage";
import "react-calendar/dist/Calendar.css";
class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      day: null,
      notifications: DUMMY_NOTIFICATIONS,
    };
  }
  componentDidMount() {
    // console.log(DUMMY_NOTIFICATIONS);
    // console.log(getadminmessage());
    Promise.resolve(getadminmessage())
      .then((notifications) => {
        return this.setState({
          notifications: notifications,
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
        <section className="py-5 my-5 header text-center bg-green">
          <div className="container mt-5 text-white py-3">
            <h1 className="page-section-heading text-center text-uppercase text-white">
              Calender
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
                  className="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
          </div>
        </section>
        <div className="container-fluid px-0">
          <div className="d-flex justify-content-center align-items-center flex-column mt-3">
            <CalendarComponent
              className="calendar-latest"
              onChange={this.onUserClick}
              // value={this.state.value}
            />
            {/* <div className="py-3 fs-3">User clicked day:{this.state.day}</div> */}
          </div>
          <div>
            <section className="py-5 my-5 header text-center bg-green">
              <div className="container py text-white py-3">
                <h1 className="page-section-heading text-center text-uppercase text-white">
                  Notifications
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
                      className="bi bi-info-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </div>
                  <div className="divider-custom-line bg-white"></div>
                </div>
                <p className="masthead-subheading fs-4 text-white mb-0">
                  Here you will find all the information from the organizers
                </p>
              </div>
            </section>
            <div className="d-flex justify-content-center align-items-center flex-column mt-3 mb-5 pb-5">
              {this.state.notifications
                .slice(0)
                .reverse()
                .map((el, index) => {
                  return <Notification key={index} notification={el} />;
                })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Calendar;
