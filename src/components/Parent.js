import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        Child Component <h1>Hello "{this.props.name}" using Props</h1>
      </div>
    );
  }
}

export default Child;