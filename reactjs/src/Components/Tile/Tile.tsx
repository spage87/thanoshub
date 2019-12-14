import React, { Component } from 'react';
import { TileSize } from '../Tile/TileSize';
import styled from 'styled-components';

export type TileProps = {
  tileSize : TileSize;
}

const Wrapper = styled.section`
  background-color: #666;
  margin: 3px;
`

class Tile extends Component<TileProps> {
    render() {
      return (
        <Wrapper>
          {this.props.children}
        </Wrapper>
      )
    }
  }
  
  export default Tile;