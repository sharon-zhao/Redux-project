import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
// instantiate the store, it can be useful to pass initial state into the store here 
//if you're server rendering or initializing your redux store with data from localStorage
// if you wander reh2:31:30
const store = configureStore();

render(
  //reduxprovider provide redux store data to our child component
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
