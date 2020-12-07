import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import server from '../ServerInterface/server.js'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      data: []
    };
  }

  body = () => {
    return (
      <div>
        {this.state.data.length > 0 ?
          <div>
            {this.state.data.map((q, i) =>
              <div key={i} style={{display: "inline-block"}}>
                <Link to={{pathname:"/quiz", state:{id: q.id}}}>
                  <figure>
                    <img src={require("./images/" + q.picture)}></img>
                    <figcaption>{q.title}</figcaption>
                  </figure>
                </Link>
              </div>)}
          </div>
          : ""}
      </div>
    );
  }

  componentDidMount() {
    let data = server.getQuizzes();
    this.setState({data:data});
  }

  render() {

    let username = '';
    const location = this.props.location;
    if (location) {
      if (location.state) {
        if (location.state.user) {
          username = location.state.user;
        }
      }
    }

    return(
      <div>
        <div className="loginButton">
          {username.length > 0 ? username
            : <Link to='/login'>Login</Link>}
        </div>
        {this.body()}
      </div>
    );
  }
}

export default Home;
