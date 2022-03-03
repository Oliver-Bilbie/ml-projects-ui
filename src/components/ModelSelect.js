import React from "react";
import { Box, Text, RadioButtonGroup } from "grommet";

const ModelSelect = ({ modelNumber, setModelNumber, narrowMode }) => {
  return (
    <Box width={narrowMode ? false : "150px"} direction={narrowMode ? "column" : "row"} alignSelf="center" margin="medium" gap={narrowMode ? "small" : false}>
      <Text
        alignSelf="center"
        margin="none"
        style={narrowMode ? {} : { transform: "rotate(270deg)" }}
      >
        Select Model
      </Text>
      <RadioButtonGroup
        options={["1", "2", "3", "4", "5", "6", "7"]}
        value={modelNumber}
        onChange={(event) => setModelNumber(event.target.value)}
        direction={narrowMode ? "row" : "column"}
      />
    </Box>
  );
};

export default ModelSelect;
