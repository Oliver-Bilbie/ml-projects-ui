import React from "react";
import { Grid, Box, Heading } from "grommet";

const rows = ["xsmall", "xsmall", "xsmall"];

const columns = ["xsmall", "xsmall", "xsmall"];

const areas = [
  { name: "top-left", start: [0, 0], end: [0, 0] },
  { name: "top-middle", start: [1, 0], end: [1, 0] },
  { name: "top-right", start: [2, 0], end: [2, 0] },
  { name: "middle-left", start: [0, 1], end: [0, 1] },
  { name: "middle-middle", start: [1, 1], end: [1, 1] },
  { name: "middle-right", start: [2, 1], end: [2, 1] },
  { name: "bottom-left", start: [0, 2], end: [0, 2] },
  { name: "bottom-middle", start: [1, 2], end: [1, 2] },
  { name: "bottom-right", start: [2, 2], end: [2, 2] },
];

const GameBoard = ({ boardState, handleUpdateTile }) => {
  return (
    <Grid rows={rows} columns={columns} areas={areas}>
      <Box
        gridArea="top-left"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("tl")}
      >
        {boardState.tl !== "b" && (
          <Heading color="brand"> {boardState.tl.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="top-middle"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("tm")}
      >
        {boardState.tm !== "b" && (
          <Heading color="brand"> {boardState.tm.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="top-right"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("tr")}
      >
        {boardState.tr !== "b" && (
          <Heading color="brand"> {boardState.tr.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="middle-left"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("ml")}
      >
        {boardState.ml !== "b" && (
          <Heading color="brand"> {boardState.ml.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="middle-middle"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("mm")}
      >
        {boardState.mm !== "b" && (
          <Heading color="brand"> {boardState.mm.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="middle-right"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("mr")}
      >
        {boardState.mr !== "b" && (
          <Heading color="brand"> {boardState.mr.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="bottom-left"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("bl")}
      >
        {boardState.bl !== "b" && (
          <Heading color="brand"> {boardState.bl.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="bottom-middle"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("bm")}
      >
        {boardState.bm !== "b" && (
          <Heading color="brand"> {boardState.bm.toUpperCase()} </Heading>
        )}
      </Box>
      <Box
        gridArea="bottom-right"
        background="white"
        margin="xsmall"
        align="center"
        justify="center"
        onClick={() => handleUpdateTile("br")}
      >
        {boardState.br !== "b" && (
          <Heading color="brand"> {boardState.br.toUpperCase()} </Heading>
        )}
      </Box>
    </Grid>
  );
};

export default GameBoard;
