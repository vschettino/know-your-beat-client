import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import config from 'react-global-configuration';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import init_config from './config';
import Home from './components/pages/Home'
import Tracks from './components/pages/Tracks'
import Artists from './components/pages/Artists'
import Recommendations from './components/pages/Recommendations'
import Profile from './components/pages/Profile'
import AppBar from './components/AppBar'

config.set(init_config);

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
          <AppBar />
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/tracks" component={Tracks}/>
              <Route path="/artists" component={Artists}/>
              <Route path="/recommendations" component={Recommendations}/>
              <Route path="/profile/:access_token?" component={Profile}/>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
