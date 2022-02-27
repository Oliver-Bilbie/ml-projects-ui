import React from "react";
import { Box, Text, RadioButtonGroup } from "grommet";

const ModelSelect = ({ modelNumber, setModelNumber }) => {
  return (
    <Box width="150px" direction="row" alignSelf="center" margin="medium">
      <Text
        alignSelf="center"
        margin="none"
        style={{ transform: "rotate(270deg)" }}
      >
        Select Model
      </Text>
      <RadioButtonGroup
        options={["1", "2", "3", "4", "5", "6", "7"]}
        value={modelNumber}
        onChange={(event) => setModelNumber(event.target.value)}
      />
    </Box>
  );
};

export default ModelSelect;
