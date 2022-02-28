import React, { useState } from "react";
import { Grommet, Box, Tab, Tabs } from "grommet";
import Theme from "./theme";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";
import ModelSelect from "./components/ModelSelect";
import About from "./components/About";
import Performance from "./components/Performance";
import Analysis from "./components/Analysis";
import Model from "./components/Model";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [modelNumber, setModelNumber] = useState("1");
  const [tabNumber, setTabNumber] = useState(1);

  return (
    <div className="App">
      <Grommet theme={Theme} full={true}>
        <Banner />
        <Box direction="row" pad="large" justify="center" animation="fadeIn">
          <ModelSelect
            modelNumber={modelNumber}
            setModelNumber={setModelNumber}
          />
          <Tabs
            justify="center"
            activeIndex={tabNumber}
            onActive={(index) => setTabNumber(index)}
          >
            <Tab title="About">
              <About modelNumber={modelNumber} />
            </Tab>
            <Tab title="Model">
              <Model modelNumber={modelNumber} />
            </Tab>
            <Tab title="Performance">
              <Performance modelNumber={modelNumber} />
            </Tab>
            <Tab title="Analysis">
              <Analysis modelNumber={modelNumber} />
            </Tab>
          </Tabs>
          <Box width="150px" margin="medium" />

          {showWelcome && (
            <Welcome setShowWelcome={setShowWelcome} />
          )}
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
