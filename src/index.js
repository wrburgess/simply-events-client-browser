import React from "react";
import ReactDom from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return (
      <p>This is a test with React</p>
    );
  }
}

ReactDom.render(
  <HelloWorld />,
  document.getElementById("main")
);
