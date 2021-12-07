import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  render() {
    return (
      <div className="Joke" key={this.props.jokeID}>
        {this.props.jokeText}
      </div>
    );
  }
}

export default Joke;
