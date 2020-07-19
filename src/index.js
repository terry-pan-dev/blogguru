import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
