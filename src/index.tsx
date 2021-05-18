import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store';
import './stylesheet/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
