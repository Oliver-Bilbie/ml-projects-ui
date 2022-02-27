import React from "react";
import { Box, Heading, Text, DataTable } from "grommet";

import { PerformanceData } from "../constants/PerformanceData";

const Performance = ({ modelNumber }) => {
  return (
    <Box pad="medium">
      <Box
        width="800px"
        align="center"
        justify="center"
        pad="medium"
        background="background-front"
        round="small"
      >
        <Heading size="xsmall">Performance Metrics</Heading>
        <Box>
          <DataTable
            columns={PerformanceData[modelNumber - 1].metrics.columns}
            data={PerformanceData[modelNumber - 1].metrics.data}
          />
        </Box>
        <Heading size="xsmall">Confusion Matrix</Heading>
        <Text>True Value</Text>
        <Box direction="row">
          <Box direction="row">
            <Text
              alignSelf="center"
              margin="none"
              style={{ transform: "rotate(270deg)" }}
            >
              Predicted Value
            </Text>
          </Box>
          <DataTable
            columns={PerformanceData[modelNumber - 1].confusion_matrix.columns}
            data={PerformanceData[modelNumber - 1].confusion_matrix.data}
          />
          <Box width="124.86px"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Performance;
