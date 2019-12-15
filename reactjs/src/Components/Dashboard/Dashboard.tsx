import React, { Component } from "react";
import { TileSize } from "../Tile/TileSize";
import Weather from "../Weather/Weather";
import Clock from "../Clock/Clock";
import styled from "styled-components";
import Tile from "../Tile/Tile";

const Wrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  margin: 10px;
`;

class Dashboard extends Component {
  render() {
    return (
      <Wrapper>
        <Tile tileSize={TileSize.Medium}>
          <Clock />
        </Tile>

        <Tile tileSize={TileSize.Large}>
          <Weather />
        </Tile>

        <Tile tileSize={TileSize.Small}>custom 1</Tile>
        <Tile tileSize={TileSize.Small}>custom 2</Tile>
        <Tile tileSize={TileSize.Small}>custom 3</Tile>
        <Tile tileSize={TileSize.Small}>custom 4</Tile>
        <Tile tileSize={TileSize.Small}>custom 5</Tile>
      </Wrapper>
    );
  }
}

export default Dashboard;
