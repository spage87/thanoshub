import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
  font-family: "Roboto Condensed", sans-serif;
`;

const Header: FC = () => {
  return (
    <Wrapper>
      <Title>Thanos Hub</Title>
      <Button />
      <Button />
      <FontAwesomeIcon icon={faSignInAlt} />
      <FontAwesomeIcon icon={faSignOutAlt} />
      <FontAwesomeIcon icon={faSlidersH} />
    </Wrapper>
  );
};
export default Header;
