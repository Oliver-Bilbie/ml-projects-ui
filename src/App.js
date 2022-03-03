import React, { useState, useEffect } from "react";
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
  const [narrowMode, setNarrowMode] = useState(window.innerWidth < 1050 ? true : false);
  const [veryNarrowMode, setVeryNarrowMode] = useState(window.innerWidth < 720 ? true : false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [modelNumber, setModelNumber] = useState("1");
  const [tabNumber, setTabNumber] = useState(1);

  useEffect(() => {
    window.addEventListener('resize', updateNarrowMode);
    return () => window.removeEventListener('resize', updateNarrowMode); 
  });

  const updateNarrowMode = () => {
    window.innerWidth < 1150 ? setNarrowMode(true) : setNarrowMode(false);
    window.innerWidth < 720 ? setVeryNarrowMode(true) : setVeryNarrowMode(false);
  }

  return (
    <div className="App">
      <Grommet theme={Theme} full={true}>
        <Banner />
        <Box direction={narrowMode ? "column" : "row"} pad={veryNarrowMode ? false : "large"} justify="center" align="center" animation="fadeIn">
          <ModelSelect
            modelNumber={modelNumber}
            setModelNumber={setModelNumber}
            narrowMode={narrowMode}
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
              <Performance modelNumber={modelNumber} narrowMode={veryNarrowMode} />
            </Tab>
            <Tab title="Analysis">
              <Analysis modelNumber={modelNumber} />
            </Tab>
          </Tabs>
          <Box width={narrowMode ? false : "150px"} margin="medium" />

          {showWelcome && (
            <Welcome setShowWelcome={setShowWelcome} />
          )}
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
