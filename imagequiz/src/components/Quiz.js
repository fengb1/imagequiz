import React from "react";
import server from "../ServerInterface/server";
import Question from "./Question";
import {Redirect} from 'react-router-dom';
import history from '../ServerInterface/history';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      cursor: 0,
      score: 0,
      warning: "",
      home: false,
      showResult: false
    }
  }

  goToNext = () => {
    if (this.state.cursor < this.state.data.questions.length - 1) {
      this.setState({cursor: this.state.cursor + 1});
      this.setState({warning: ""});
    }
    else {
      history[this.props.location.state.id] = true;
      let score = 0;
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i]) {
          score += 1;
        }
      }
    }
    server.saveScore(this.props.location.state.user, this.props.location.state.id, score);
    this.setState({showResult: true, score: score});
  }

  goToLast = () => {
    if (this.state.cursor > 0) {
      this.setState({cursor: this.state.cursor - 1});
    }
    else {
      this.setState({warning: "This is the first question."});
    }
  }

  retry = () => {
    this.setState({cursor: 0});
    this.setState({showResult: false});
  }

  onChoiceSelected = (correct) => {
    if (correct) {
      this.answers[this.state.cursor] = correct;
    }
  }

  home = () => {
    this.setState({home: true});
  }

  componentDidMount() {
    let data = server.getQuiz(this.props.location.state.id);
    this.setState({data:data});
  }

  render() {
    const {data, cursor, warning, home} = this.state;

    const location = this.props.location;
    let homepage = {pathname: '/imagequiz/'};
    if (home) {
      return (
        <Redirect to={homepage} />
      );
    }


    return (
      <div>
        {showResult === false ?
          <div className="Content">
          {data.questions ? <Question question = {data.questions[cursor]}
            onChoiceSelected={this.onChoiceSelected}
            cursor={cursor}/> : ""}
          <br />
          <button onClick={this.goToLast}>Back</button>
          <button onClick={this.goToNext}>Next</button>
          <br /><br />
          <div><b>{warning}</b></div>
          </div>
          :
          <div>
            <div>Score: {score}</div>
            <br />
            <button onClick={this.home}>Hompage</button>
            <button onClick={this.retry}>Try again</button>
          </div>
        }

    )
  }
}

export default Quiz;
