import React from 'react';
import { Grommet, Box } from 'grommet';
import Theme from './theme';
import Banner from './components/header';
import TicTacToe from './components/ticTacToe';


function App() {

  return (
    <div className="App">
        <Grommet theme={Theme} full={true}>
            <Banner />
            <Box align="center" pad="large">
                <TicTacToe />
            </Box>
        </Grommet>
    </div>
  );
}

export default App;
