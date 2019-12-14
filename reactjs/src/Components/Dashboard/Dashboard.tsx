import React, { Component } from 'react';
import { TileSize } from '../Tile/TileSize';
import Weather from '../Weather/Weather';
import Clock from '../Clock/Clock';
import styled from 'styled-components';
import Tile from '../Tile/Tile';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(6, 1fr);
`

class Dashboard extends Component {
    render() {
      return <Wrapper>
        
        <Tile tileSize={TileSize.Medium}>
          <Clock />
        </Tile>

        <Tile tileSize={TileSize.Large}>
          <Weather />
        </Tile>
        
        <Tile tileSize={TileSize.Small}>
          test
        </Tile>
      </Wrapper>
    }
  }
  
  export default Dashboard;