import React, { Fragment, useState, useEffect, FC } from "react";
import { DateTime } from "luxon";

const Clock: FC = () => {
  const [dateTime, setDateTime] = useState(UpdateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(UpdateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div>
        {dateTime.day} {dateTime.monthLong} {dateTime.year}
      </div>
      <div>
        {dateTime.hour}:{dateTime.minute >= 0 && dateTime.minute <= 9 ? 0 : ""}
        {dateTime.minute}
      </div>
    </Fragment>
  );
};

function UpdateTime() {
  return DateTime.local();
}

export default Clock;
