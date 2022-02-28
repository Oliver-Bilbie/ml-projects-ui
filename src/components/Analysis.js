import React from "react";
import { Box, Markdown } from "grommet";

const AnalysisModelOne = `
A good place to start when evaluating the performance of a machine learning model is to compare it to a rudimentary model such as random guessing. In this case we are working with an imbalanced dataset, so a good baseline is a model which simply predicts "nobody" for all inputs.
Such a model has an accuracy of 56.3% whereas the machine learning model has an accuracy of 94.2%, which is a strong indication that a random forest classifier is appropriate for this task (of course ignoring the fact that we happen to know that tic-tac-toe is solvable!).

To evaluate the model's performance further, we will examine the precision score, recall score and f1 score of each target class.
The recall score is the ratio of True Positives to Occurances, or in context, the probability of the model predicting an outcome given that the outcome is correct.
The precision score is the ratio of True Positives to Predictions, or in context, the probability that the model's prediction is correct given that it has made a given prediction.
The f1 score is simply the harmonic mean of the recall and precision scores.

From these metrics, we can see that the model performs fairly well for all classes other than "everyone". This is likely due to an imbalance in the dataset where this class is significantly unrepresented.
In particular the recall value for this class is very low, which implies that the model is "hesitant" to predict that everybody wins.
`;

const AnalysisModelTwo = `
From looking at the performance metrics we can see that this model is better than model 1 in all areas.
One possible explanation for the better performance of this model is due to the low *n estimators* and *max depth* values used in the model, since providing less features reduces the complexity of the model.
The *n estimators* and *max depth* values are intentionally kept low since increasing them too much allows the model to fully solve the game, which somewhat undermines the point of this project!
`;

const AnalysisModelThree = `
Model 3 solves the problem of low recall of the "everyone" class, but at the cost of everything else. Clearly this method is not worth pursuing further.
`;

const AnalysisModelFour = `
Model 4 manages to increase the recall score of the "everyone" class by 40% when compared to model 2, without sacrificing the f1 scores of the other classes. It actually manages to improve the f1 score of "x" and "o".
The cost of this change is a ~5.5% decrease in precision for "everyone" predictions, which I believe to be justified given the advantages.
`;

const AnalysisModelFive = `
Model 5 demonstrates the "dangers" of poor feature engineering. The additional features only seem to mislead the model, with every class experiencing a decreased f1 score. Clearly this method is not worth pursuing further.
`;

const AnalysisModelSix = `
Model 6 yields the greatest f1 score for the "everyone" class out of all of the models so far, however unlike model 4 this comes at the cost of the f1 scores of the other classes.
The decreased precision seen here is due to some information being lost in the the feature engineering process due to the use of a many-to-one mapping.
`;

const AnalysisModelSeven = `
Model 7 performs better than all of the other models listed here in terms of f1 score, however it is still not ideal.
The main weakness of the model is once again a low precision score for the "everyone" class.

Without engineering features involving "three in a row" (which I am intentionally not allowing myself to do) I believe that the best way to improve the model beyond this point is to increase the *n estimators* value, since in its current state the model appears to be under-fitting the dataset. Increasing the *max depth* value would also most likely be beneficial for the same reason.
`;

const AnalysisData = {
  1: AnalysisModelOne,
  2: AnalysisModelTwo,
  3: AnalysisModelThree,
  4: AnalysisModelFour,
  5: AnalysisModelFive,
  6: AnalysisModelSix,
  7: AnalysisModelSeven,
};

const Analysis = ({ modelNumber }) => {
  return (
    <Box pad="medium">
      <Box
        width="600px"
        height={{ min: "400px" }}
        align="center"
        justify="center"
        gap="small"
        pad="medium"
        background="background-front"
        round="small"
      >
        <Markdown>{AnalysisData[modelNumber]}</Markdown>
      </Box>
    </Box>
  );
};

export default Analysis;
