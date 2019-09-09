import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    // if no tag, use below
    if (this.state.tags.length === 0) return <p>the are no tags!</p>;

    //else use below
    // this will render a list from tags properties
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <div>{this.renderTags()}</div>;
  }
}

export default Counter;
