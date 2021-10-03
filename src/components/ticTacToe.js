import React, { useState } from 'react';
import { Grid, Box, Heading, Button, Spinner, Layer } from 'grommet';


const rows = ["xsmall", "xsmall", "xsmall", "xxsmall"];

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
    { name: "control-button", start: [1, 3], end: [1, 3] },
];


const TicTacToe = () => {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [boardState, setBoardState] = useState({
        "tl": "b", "tm": "b", "tr": "b",
        "ml": "b", "mm": "b", "mr": "b",
        "bl": "b", "bm": "b", "br": "b"
    });

    const handleUpdateTile = (name) => {
        let nextValue = boardState[name]
        if (nextValue === "b") {
            nextValue = "x"
        } else if (nextValue === "x") {
            nextValue = "o"
        } else {
            nextValue = "b"
        }
        setBoardState({ ...boardState, [name]: nextValue })
    };

    const handleSubmit = () => {
        setLoading(true);
        let request = new XMLHttpRequest();
        const path = "https://bqodshp6z9.execute-api.eu-west-1.amazonaws.com/get-prediction/";
        const args = (
            boardState.tl + boardState.tm + boardState.tr +
            boardState.ml + boardState.mm + boardState.mr +
            boardState.bl + boardState.bm + boardState.br
        );

        request.onerror = function() {
            setResponse("An error has occurred");
            setLoading(false);
            setShowResponse(true);
        };
        request.ontimeout = function() {
            setResponse("The request has timed out");
            setLoading(false);
            setShowResponse(true);
        };
        request.onload = function() {
            if (request.status === 200) {
                if (request.response.status === 200) {
                    setResponse("The winner is: " + request.response.message.slice(2, -2));
                    setShowResponse(true);
                } else {
                    setResponse("An error has occurred");
                    setShowResponse(true);
                };
            } else {
                setResponse("An error has occurred");
                setShowResponse(true);
            };
            setLoading(false);
        };

        request.timeout = 30000;
        request.responseType = "json"
        request.open("GET", path + args);
        request.send();
    };

    return (
        <Box align="center" background="background-front" round="small" pad="medium" animation="fadeIn">
            <Grid rows={rows} columns={columns} areas={areas} >
                <Box
                    gridArea="top-left"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("tl")}
                >
                    {boardState.tl !== "b" && (<Heading color="brand"> {(boardState.tl).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="top-middle"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("tm")}
                >
                    {boardState.tm !== "b" && (<Heading color="brand"> {(boardState.tm).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="top-right"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("tr")}
                >
                    {boardState.tr !== "b" && (<Heading color="brand"> {(boardState.tr).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="middle-left"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("ml")}
                >
                    {boardState.ml !== "b" && (<Heading color="brand"> {(boardState.ml).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="middle-middle"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("mm")}
                >
                    {boardState.mm !== "b" && (<Heading color="brand"> {(boardState.mm).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="middle-right"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("mr")}
                >
                    {boardState.mr !== "b" && (<Heading color="brand"> {(boardState.mr).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="bottom-left"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("bl")}
                >
                    {boardState.bl !== "b" && (<Heading color="brand"> {(boardState.bl).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="bottom-middle"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("bm")}
                >
                    {boardState.bm !== "b" && (<Heading color="brand"> {(boardState.bm).toUpperCase()} </Heading>)}
                </Box>
                <Box
                    gridArea="bottom-right"
                    background="white"
                    margin="xsmall"
                    align="center"
                    justify="center"
                    onClick={() => handleUpdateTile("br")}
                >
                    {boardState.br !== "b" && (<Heading color="brand"> {(boardState.br).toUpperCase()} </Heading>)}
                </Box>

                <Box gridArea="control-button" direction="row" align="end" justify="center">
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
                            <Box width="xsmall" >
                                <Button label="Close" onClick={() => setShowResponse(false)} />
                            </Box>
                        </Box>
                    </Layer>
                )}
            </Grid>
        </Box>
    );
};

export default TicTacToe;