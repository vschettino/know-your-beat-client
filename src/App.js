import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './components/Home'
import AppBar from './components/AppBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <AppBar />
        <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
