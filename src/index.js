import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import configureStore from './store'

import { BrowserRouter as Router } from "react-router-dom";

import Root from "./pages/Root"

import "./App.css"

const store = configureStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Root />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
