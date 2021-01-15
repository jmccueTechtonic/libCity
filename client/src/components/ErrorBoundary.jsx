import React, { Component } from "react";

import Nav from "./Nav";
import Footer from "./Footer";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // MUST return an updated state object and MUST NOT trigger side effects
  static getDerivedStateFromError(error) {
    return { error };
  }

  // CAN trigger side effects; commonly used to log out any errors
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <Nav />
          <h1 style={{ textAlign: "center" }}>
            An error has occurred in a child component!
          </h1>
          <Footer />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
