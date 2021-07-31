import Header from './components/Header.js'
import Box from './components/Box.js'
import Sidebar from './components/Sidebar.js'
import { render } from '@testing-library/react';

function App() {
 return (
  <div>
    <Header></Header>
    <Box></Box>
    <Sidebar></Sidebar>
  </div>
 );
}

export default App;
