import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    //in react, use setState to update value!
    //use js to increment count value
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {/* use class variable as classname */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* call method formatCount*/}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sml"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //make variable for classname
    //append classes value with if else statement below
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; /* simplified this.state to count*/

    return count === 0 ? "Zero" : count; /* return yada2 : else return count*/
  }
}

export default Counter;
