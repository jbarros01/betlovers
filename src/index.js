import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import configureStore from './store'

import { BrowserRouter as Router } from "react-router-dom";

import RootContainer from "./components/RootContainer"

import "./App.css"

const store = configureStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <RootContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
