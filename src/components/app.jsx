import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Header />
        <div id="content">
          This is a test with React
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
