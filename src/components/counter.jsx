import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        {/* this=referring to this class */}
        {/* state.count=referring to object state, properties count */}
        {/* line below print count value */}
        {/* you can out any js script in {} */}
        <span>{this.formatCount()}</span> {/* call method formatCount*/}
        <button>Increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state; /* simplified this.state to count*/

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
