import React, { FC } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

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
    </Wrapper>
  );
};
export default Header;
