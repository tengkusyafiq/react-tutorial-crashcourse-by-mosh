import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageURL: "https://picsum.photos/200"
  };
  render() {
    return (
      <div>
        <img src={this.state.imageURL} alt="" />
        <span className="badge badge-primary m2">{this.formatCount()}</span>
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
