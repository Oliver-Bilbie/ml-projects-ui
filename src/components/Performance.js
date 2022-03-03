import React from "react";
import { Box, Heading, Text, Markdown, DataTable } from "grommet";

import { PerformanceData } from "../constants/PerformanceData";

const Performance = ({ modelNumber, narrowMode }) => {
  return (
    <Box pad="medium">
      <Box
        width="800px"
        align="center"
        justify="center"
        pad="medium"
        background="background-front"
        round="small"
        overflow="auto"
      >
        <Heading size="xsmall">Performance Metrics</Heading>
        <Box direction="row">
          {narrowMode ? (
            <Box direction="column">
              <DataTable
                columns={PerformanceData[modelNumber - 1].metrics.columns.slice(0, -2)}
                data={PerformanceData[modelNumber - 1].metrics.data}
              />
              <DataTable
                columns={PerformanceData[modelNumber - 1].metrics.columns.slice(-2)}
                data={PerformanceData[modelNumber - 1].metrics.data}
                primaryKey={false}
              />
            </Box>
          ) : (
            <DataTable
              columns={PerformanceData[modelNumber - 1].metrics.columns}
              data={PerformanceData[modelNumber - 1].metrics.data}
            />
        )}
        </Box>
        <Heading size="xsmall">Confusion Matrix</Heading>
        {!narrowMode && <Text>True Value</Text>}
        <Box direction={narrowMode ? "column" : "row"}>
          {narrowMode ? 
            <Markdown align="center">Key: True Value - **Predicted Value**</Markdown> 
          :
            <Text
              alignSelf="center"
              margin="none"
              style={{ transform: "rotate(270deg)" }}
            >
              Predicted Value
            </Text>
          }
          <DataTable
            columns={PerformanceData[modelNumber - 1].confusion_matrix.columns}
            data={PerformanceData[modelNumber - 1].confusion_matrix.data}
          />
          <Box width="124.86px"></Box>
        </Box>
        <Box height="xxsmall" />
      </Box>
    </Box>
  );
};

export default Performance;
