import React from "react";
import { Box, Markdown } from "grommet";

const AboutModelOne = `
Model 1 uses a one-hot encoded board state to predict the outcome of the game. This approach avoids implying an order to the players (ie: X > 0) which would not be appropriate in this case. The downside to this method is that the nine squares of the game board combined with the three possible states of each square gives a total of 27 features, which may add unncessary complexity to the model itself.
`;

const AboutModelTwo = `
Model 2 uses an ordinal encoded board state to predict the outcome of the game. The mapping used to encode the features is:

- x => 1
- o => -1
- blank -> 0

which aims to numerically capture the dynamic between the states, where x is essentially the opposite of o, whereas blank spaces are neutral. Experimentation (which regretably is not  captured here) confirmed that using this mapping as opposed to:

- blank -> 0
- x => 1
- o => 2

performed better by every metric used here.
`;

const AboutModelThree = `
Model 3 aims to address the issue of imbalancing in the dataset. If we examine the number of board states corresponding to each outcome, we can see that "everyone" is strongly under-represented whilst "nobody" makes up a majority of the cases.

Winner | Occurances
--- | ---
nobody | 11125
x | 4123
o | 4123
everyone | 312

In this model, we will downsample the "nobody", "x", and "o" data so that they each contain the same number of entries as "everyone". This will significantly reduce the size of the training dataset, and so is likely to lead to underfitting.
`;

const AboutModelFour = `
Model 4 aims to address the issue of imbalancing in the dataset. If we examine the number of board states corresponding to each outcome, we can see that "everyone" is strongly under-represented whilst "nobody" makes up a majority of the cases.

Winner | Occurances
--- | ---
nobody | 11125
x | 4123
o | 4123
everyone | 312

In this model, we will upsample the "everyone", "x", and "o" data so that they each contain the same number of entries as "nobody". This will significantly increase the size of the training dataset, and so is likely to lead to overfitting.
`;

const AboutModelFive = `
Model 5 demonstrates the "dangers" of poor feature engineering. This model adds two additional features which correspond to the number of Xs on the board and to the number of Os on the board respectively.
`;

const AboutModelSix = `
Model 6 introduces some more reasonable feature engineering. Due to the rules of the project not allowing the rules of the game to be explicitly coded into to the model, this model uses the next best thing. The additional features added here correspond to the number of occupied positions by each player which are adjacent:

- Horizontally
- Vertically
- Diagonally with a positive gradient
- Diagonally with a negative gradient

To evaluate the predictive power of these features, the board state features are not used by this model.
`;

const AboutModelSeven = `
Model 7 uses a combination of methods used in the other models to produce the best possible F1 score. The dataset is upsampled, ordinal encoded, and the features from model 6 are added (in addition to the board state).
`;

const AboutData = {
  1: AboutModelOne,
  2: AboutModelTwo,
  3: AboutModelThree,
  4: AboutModelFour,
  5: AboutModelFive,
  6: AboutModelSix,
  7: AboutModelSeven,
};

const About = ({ modelNumber }) => {
  return (
    <Box pad="medium">
      <Box
        width="600px"
        height="600px"
        align="center"
        justify="center"
        gap="small"
        pad="medium"
        background="background-front"
        round="small"
      >
        <Markdown>{AboutData[modelNumber]}</Markdown>
      </Box>
    </Box>
  );
};

export default About;
