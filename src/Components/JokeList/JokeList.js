import React, { Component } from "react";
import axios from "axios";
import Joke from "../Joke/Joke";
import "./JokeList.css";

const API_URL = "https://icanhazdadjoke.com/";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let response = await axios.get(API_URL, {
        headers: { Accept: "application/json" },
      });
      jokes.push({ joke: response.data.joke, id: response.data.id });
    }
    this.setState({ jokes: jokes });
  }

  render() {
    return (
      <div className="JokeList">
        <div class="Joke-side-bar">
          <h1>Dad Jokes</h1>
          <button onClick={this.handleClick}>Get More Jokes!</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map((j) => (
            <Joke jokeText={j.joke} key={j.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
