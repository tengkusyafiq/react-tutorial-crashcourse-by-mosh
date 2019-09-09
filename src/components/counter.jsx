import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        {/* this=referring to this class */}
        {/* state.count=referring to object state, properties count */}
        {/* line below print count value */}
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
