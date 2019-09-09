import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    let classes = "badge m-2 badge-"; //make variable for classname
    //append classes value with if else statement below
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        {/* use class variable as classname */}
        <span className={classes}>{this.formatCount()}</span>
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
