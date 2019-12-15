import React, { FC } from "react";
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

const Tile: FC<TileProps> = props => {
  return <Wrapper tileSize={props.tileSize}>{props.children}</Wrapper>;
};

export default Tile;
