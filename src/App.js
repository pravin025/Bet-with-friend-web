import './App.css'
import Header from './components/hrader';
import Sidebar from './components/sidebar';
import Main from './components/main';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <div className='main-content'>
            <Sidebar/>
            <Main/>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
