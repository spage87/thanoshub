import React, { Component } from "react";
import { TileSize } from "../Tile/TileSize";
import styled from "styled-components";

export interface TileProps {
  tileSize: TileSize;
}

const Wrapper = styled.section<TileProps>`
  grid-column: ${props =>
    props.tileSize === TileSize.Large
      ? "span 3"
      : props.tileSize === TileSize.Medium
      ? "span 2"
      : "span 1"};
  grid-row: ${props =>
    props.tileSize === TileSize.Large
      ? "span 3"
      : props.tileSize === TileSize.Medium
      ? "span 2"
      : "span 1"};
  background-color: #1e1e1e;
  padding: 1%;
`;

class Tile extends Component<TileProps> {
  render() {
    return (
      <Wrapper tileSize={this.props.tileSize}>{this.props.children}</Wrapper>
    );
  }
}

export default Tile;
