import React, { useState } from "react";
import { Box, Heading, Button, Spinner, Layer } from "grommet";
import GameBoard from "./GameBoard";

const Model = ({ modelNumber }) => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [boardState, setBoardState] = useState({
    tl: "b",
    tm: "b",
    tr: "b",
    ml: "b",
    mm: "b",
    mr: "b",
    bl: "b",
    bm: "b",
    br: "b",
  });

  const handleUpdateTile = (name) => {
    let nextValue = boardState[name];
    if (nextValue === "b") {
      nextValue = "x";
    } else if (nextValue === "x") {
      nextValue = "o";
    } else {
      nextValue = "b";
    }
    setBoardState({ ...boardState, [name]: nextValue });
  };

  const handleSubmit = () => {
    setLoading(true);
    let request = new XMLHttpRequest();
    const path = process.env.REACT_APP_ENDPOINT;
    const args =
      boardState.tl +
      boardState.tm +
      boardState.tr +
      boardState.ml +
      boardState.mm +
      boardState.mr +
      boardState.bl +
      boardState.bm +
      boardState.br +
      "/" +
      modelNumber;

    request.onerror = function () {
      setResponse("An error has occurred");
      setLoading(false);
      setShowResponse(true);
    };
    request.ontimeout = function () {
      setResponse("The request has timed out");
      setLoading(false);
      setShowResponse(true);
    };
    request.onload = function () {
      if (request.status === 200) {
        if (request.response.status === 200) {
          setResponse("The winner is: " + request.response.message);
          setShowResponse(true);
        } else {
          setResponse("An error has occurred");
          setShowResponse(true);
        }
      } else {
        setResponse("An error has occurred");
        setShowResponse(true);
      }
      setLoading(false);
    };

    request.timeout = 10000;
    request.responseType = "json";
    request.open("GET", path + args);
    request.send();
  };

  return (
    <Box pad="medium">
      <Box
        align="center"
        justify="center"
        gap="small"
        pad="medium"
        background="background-front"
        round="small"
      >
        <GameBoard
          boardState={boardState}
          handleUpdateTile={handleUpdateTile}
        />
        {loading ? (
          <Spinner />
        ) : (
          <Button primary label="Submit" onClick={handleSubmit} />
        )}
      </Box>

      {showResponse && (
        <Layer
          onEsc={() => setShowResponse(false)}
          onClickOutside={() => setShowResponse(false)}
        >
          <Box width="medium" height="250px" pad="small">
            <Heading>{response}</Heading>
            <Box width="xsmall">
              <Button label="Close" onClick={() => setShowResponse(false)} />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default Model;
