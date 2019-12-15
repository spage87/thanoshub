import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 4rem;
`;

const Weather: FC = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faCloud} />
    </Wrapper>
  );
};

export default Weather;
