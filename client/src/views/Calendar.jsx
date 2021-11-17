import { Component } from "react";
import CalendarComponent from "react-calendar";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  componentDidMount() {}

  onUserClick = (event) => {
    console.log(event);
    const day = JSON.stringify(event);
    this.setState({
      value: day,
    });
  };

  render() {
    return (
      <>
        <h5>Calendar view</h5>
        <div>react calendar package</div>
        <CalendarComponent
          className="calendar"
          onChange={this.onUserClick}
          // value={this.state.value}
        />
        <div>User clicked day:{this.state.value}</div>
      </>
    );
  }
}

export default Calendar;
