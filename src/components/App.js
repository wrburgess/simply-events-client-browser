import React, { Component } from "react";
import HeaderContainer from "../containers/HeaderContainer";
import FooterContainer from "../containers/FooterContainer";

class App extends Component {
  render() {
    return (
      <div id="window">
        <HeaderContainer />
        <div id="content">
          This is a test with React
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default App;
