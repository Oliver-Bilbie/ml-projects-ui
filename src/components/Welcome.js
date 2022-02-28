import React from "react";
import { Box, Layer, Text, Markdown, Heading, Anchor, Button } from "grommet";


const body1 = `
This project is an exploration of a dataset which contains all possible combinations Xs, Os, and blank spaces on a tic tac toe grid along with the outcome of the game (for example, X wins).
The inspiration for this idea came from
`

const body2 = `
which does not contain every possible board state, and has a target class of (X wins).

The objective was to create the best classification model for predicting the winner of a game of tic tac toe for a given board state, whilst obeying the following rules:
`

const body3 = `
- No knowledge of the game may be used
- The training dataset must not be exhaustive
- The model used will be a random forest classifier
- The hyperparameters may not be tuned such that the model is able to achieve 100% accuracy
`

const body4 = `
The reasoning behind this is to demonstrate the use of data science techniques on a system where the correct prediction can be easily evaluated by the user,
whilst not initially creating a perfect model which cannot be improved upon through manipulation of the test dataset. Only one type of classifier is used due to it not
being possible to compare different classifiers without using the optimal hyperparameters. Random forest was chosen for its high accuracy, although this choice was somewhat arbitrary.

This webpage will allow you to predict the outcome of a game of tic tac toe in real time by sending requests to a flask application running on an AWS EC2 instance.
I would have preferred to use AWS Lambda for this service, however due to the limit on the size of dependencies used in the Python scripts this was not possible.
The source code for the flask application is available from my
`

const body5 = `along with the source code for this webpage.`


const Welcome = ({setShowWelcome}) => {
    return(
        <Layer>
            <Box pad="medium" align="center">
                <Heading>Welcome!</Heading>
                <Text>
                    {body1}
                    <Anchor label="this dataset" href="https://www.openml.org/d/50"/>
                    {body2}
                    <Markdown>{body3}</Markdown>
                    {body4}
                    <Anchor label="GitHub page" href="https://github.com/Oliver-Bilbie"/>
                    {body5}
                </Text>
                <Box height="20px"/>
                <Button label="Let's Go" onClick={() => setShowWelcome(false)} />
            </Box>     
        </Layer>
    )
}

export default Welcome
