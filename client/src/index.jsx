import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "regenerator-runtime/runtime";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

render(
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById("root")
);
