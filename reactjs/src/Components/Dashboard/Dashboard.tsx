import React, { Component } from 'react';
import { TileSize } from '../Tile/TileSize';
import Weather from '../Weather/Weather';
import Clock from '../Clock/Clock';
import styled from 'styled-components';
import Tile from '../Tile/Tile';

const Wrapper = styled.section`
  
`

class Dashboard extends Component {

    render() {
      return <Wrapper>
        
        <Tile tileSize={new TileSize()} >
          <Clock />
        </Tile>

        <Tile tileSize={new TileSize()}>
          <Weather />
        </Tile>
        
      </Wrapper>
    }
  }
  
  export default Dashboard;