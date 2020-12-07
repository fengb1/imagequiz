import React from 'react';
import {Redirect} from 'react-router-dom';

class Score extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      back: false,
      repeat: false
    }
  }

  home = () => {
    this.setState({back: true});
  }

  repeat = () => {
    this.setState({repeat: true});
  }

  render() {
    let homepage = {pathname: '/imagequiz/'};
    let id = 0;
    const location = this.props.location;
    if (location) {
      if (location.state) {
        if (location.state.score) {
          id = location.state.id;
        }
      }
    }
    let again = {pathname: '/quiz', state: {id: id}}
    if (this.state.back) {
      return (
        <Redirect to={homepage} />
      );
    }
    if (this.state.repeat) {
      return (
        <Redirect to={again} />
      );
    }
    let score = 0;
    if (location) {
      if (location.state) {
        if (location.state.score) {
          score = location.state.score;
        }
      }
    }

    return (
      <div>
        <div>Score: {score}</div>
        <br />
        <button onClick={this.home}>Hompage</button>
        <button onClick={this.repeat}>Try again</button>
      </div>
    );
  }
}
export default Score;
