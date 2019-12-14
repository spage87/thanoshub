import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
`

class Header extends Component {
    render() {
      return (
          <React.Fragment>
            <Title>
            <h1>Thanos Hub</h1>
            </Title>
            <Button />
            <Button />
        </React.Fragment>
      )
    }
  }
  
  export default Header;