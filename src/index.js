import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { Button, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import ListScreen from './components/screens/ListScreen';
import databaseService from './services/database/databaseService';

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

const renderReactDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ListScreen />
      </ChakraProvider>
    </React.StrictMode>,
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
