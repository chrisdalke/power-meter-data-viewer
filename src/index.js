import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';

const renderReactDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
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
