import React from "react";
import server from "../ServerInterface/server"

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    let data = server.getQuiz(this.props.location.state.id);
    this.setState({data:data});
  }

  render() {
    return (
      <div className="Content">

      </div>
    )
  }
}

export default Quiz;
