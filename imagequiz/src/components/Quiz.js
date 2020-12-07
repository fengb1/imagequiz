import React from "react";
import server from "../ServerInterface/server"
import Question from "./Question"
import {Redirect} from 'react-router-dom';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      cursor: 0,
      score: 0,
      warning: "",
      jump: false,
      id: this.props.location.state.id
    }
  }

  goToNext = () => {
    if (this.state.cursor < this.state.data.questions.length - 1) {
      this.setState({cursor: this.state.cursor + 1});
      this.setState({warning: ""});
    }
    else {
      this.setState({jump: true});
    }
  }

  goToLast = () => {
    if (this.state.cursor > 0) {
      this.setState({cursor: this.state.cursor - 1});
    }
    else {
      this.setState({warning: "This is the first question."});
    }
  }

  onChoiceSelected = (correct) => {
    if (correct) {
      this.setState({score: this.state.score + 1})
    }
  }

  componentDidMount() {
    let id = this.state.id;
    const location = this.props.location;
    if (location) {
      if (location.state) {
        if (location.state.id) {
          id = location.state.id;
        }
      }
    }
    let data = server.getQuiz(id);
    this.setState({data:data});
  }

  render() {
    const {data, cursor, warning, jump} = this.state;
    let from = {pathname: '/score', state: {score: this.state.score, id: this.state.id}};
    if (jump) {
      return (
        <Redirect to={from} />
      );
    }
    return (
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
    )
  }
}

export default Quiz;
