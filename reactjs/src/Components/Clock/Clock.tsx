import React, { useState, useEffect, FC } from "react";
import { DateTime } from "luxon";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.section`
  display: flex;
`;

const Day = styled.section`
  font-size: 2rem;
`;
const Month = styled.section`
  font-size: 2rem;
`;
const Year = styled.section`
  font-size: 1.5rem;
`;

const Time = styled.section`
  font-size: 2rem;
`;

const Clock: FC = () => {
  const [dateTime, setDateTime] = useState(UpdateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(UpdateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function UpdateTime() {
    return DateTime.local();
  }

  return (
    <Wrapper>
      <Date>
        <Day>{dateTime.day}</Day> <Month>{dateTime.monthLong}</Month>{" "}
        <Year>{dateTime.year}</Year>
      </Date>
      <Time>
        {dateTime.hour}:{dateTime.minute >= 0 && dateTime.minute <= 9 ? 0 : ""}
        {dateTime.minute}
      </Time>
    </Wrapper>
  );
};

export default Clock;
