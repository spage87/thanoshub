import React, { Component, Fragment } from "react";
import { DateTime } from "luxon";

class Clock extends Component {
  render() {
    var dateTime = DateTime.local();

    return (
      <Fragment>
        <div>
          {dateTime.day} {dateTime.monthLong} {dateTime.year}
        </div>
        <div>
          {dateTime.hour}:{dateTime.minute}
        </div>
      </Fragment>
    );
  }
}

export default Clock;
