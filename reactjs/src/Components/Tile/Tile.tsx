import React, { Component } from "react";
import { TileSize } from "../Tile/TileSize";
import styled from "styled-components";

export interface TileProps {
  tileSize: TileSize;
}

const Wrapper = styled.section<TileProps>`
  grid-column-start: 1;
  grid-column-end: ${props =>
    props.tileSize == TileSize.Large
      ? 4
      : props.tileSize == TileSize.Medium
      ? 3
      : 2};
  background-color: #1e1e1e;
`;

class Tile extends Component<TileProps> {
  render() {
    return (
      <Wrapper tileSize={this.props.tileSize}>{this.props.children}</Wrapper>
    );
  }
}

export default Tile;
