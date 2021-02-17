import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom";

import RootContainer from "./components/RootContainer"

import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <RootContainer />
    </Router>  
  </React.StrictMode>, 
  document.getElementById("root")
);
