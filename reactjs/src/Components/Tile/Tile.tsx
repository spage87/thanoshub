import React, { Component } from 'react';
import { Module } from '../../DataTypes/Module/Module';
import { TileSize } from '../Tile/TileSize';

export type TileProps = {
  tileSize : TileSize;
}

class Tile extends Component<TileProps> {
    render() {
      return <div></div>
    }
  }
  
  export default Tile;