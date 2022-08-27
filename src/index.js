import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { Button, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import ListScreen from './components/screens/ListScreen';
import BatteryScreen from './components/screens/BatteryScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import databaseService from './services/database/databaseService';
import { BrowserRouter, HashRouter, Route, Redirect, Switch } from 'react-router-dom';

window.db = databaseService;

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: '#F9C80E'
      }
    }
  }
});

// Selectively choose router based on whether we are using cordova or the web app
const Router = window.cordova ? HashRouter : BrowserRouter;

const renderReactDom = () => {
  ReactDOM.render(
    <Router>
      <ChakraProvider theme={theme}>
        <Switch>
          <Route path="/battery/:id">
            <ListScreen />
          </Route>
          <Route path="/settings">
            <ListScreen />
          </Route>
          <Route path="/" exact>
            <ListScreen />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>,
    document.getElementById('root')
  );
}

// If we're rendering under cordova, only render the react application
// when the device is ready. Otherwise, render right away.
if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}
