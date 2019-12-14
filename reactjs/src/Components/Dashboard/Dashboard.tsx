import React, { Component } from 'react';
import Tile from '../Tile/Tile';
import { TileSize } from '../Tile/TileSize';
import Weather from '../Weather/Weather';
import Clock from '../Clock/Clock';

class Dashboard extends Component {

    render() {
      return <React.Fragment>
          <Clock tileSize={new TileSize()} />
          <Weather tileSize={new TileSize()} />
      </React.Fragment>
    }
  }
  
  export default Dashboard;