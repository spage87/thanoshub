import React, { Component, Fragment } from "react";
import { DateTime } from "luxon";

class Clock extends Component {
  state = {
    dateTime: DateTime.local()
  };
  timer: number = setInterval(() => this.tick(), 1000);

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      dateTime: DateTime.local()
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          {this.state.dateTime.day} {this.state.dateTime.monthLong}{" "}
          {this.state.dateTime.year}
        </div>
        <div>
          {this.state.dateTime.hour}:
          {this.state.dateTime.minute >= 0 && this.state.dateTime.minute <= 9
            ? 0
            : ""}
          {this.state.dateTime.minute}
        </div>
      </Fragment>
    );
  }
}

export default Clock;
