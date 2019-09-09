import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 10 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        {/* call method formatCount*/}
        <button className="btn btn-secondary btn-sml">Increment</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state; /* simplified this.state to count*/

    return count === 0 ? "Zero" : count; /* return yada2 : else return count*/
  }
}

export default Counter;
