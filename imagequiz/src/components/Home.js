import React from 'react';
import "./Home.css";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showLoginForm: false,
      authenticated: false,
    };
  }

  login = () => {
    this.setState({showLoginForm: true});
  }

  onSubmit = (event) => {
    if (this.state.username.trim().length > 0) {
      this.setState({authenticated: true});
    }
    event.preventDefault();
  }

  onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  }

  render() {

    imageQuiz1 = () => {
      return(
        window.open("./Quiz1.js");
      );
    }

    if ((!this.state.authenticated) && this.state.showLoginForm) {
      return(
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Username:</label>
            <input
              name = "username"
              value = {this.state.username}
              onChange = {this.onInputChange}
            ></input><br></br>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
    else {
      return(
        <div>
          <div className="loginButton">
            {this.state.authenticated ? this.state.username :
            <button onClick={this.login}>Login</button>}
          </div>
          <div>Homepage</div>
          <div>
            <div className="images">
              <img src={require("./images/cherryblossom.png") onClick={() => imageQuiz1()}}></img>
              <figcaption> cherryblossom </figcaption>
            </div>
            <div className="images">
              <img src={require("./images/daffodil.png")}></img>
              <figcaption> daffodil </figcaption>
            </div>
            <div className="images">
              <img src={require("./images/daisy.jpg")}></img>
              <figcaption> daisy </figcaption>
            </div>
            <div className="images">
              <img src={require("./images/lily.jpg")}></img>
              <figcaption> lily </figcaption>
            </div>
            <div className="images">
              <img src={require("./images/rose.png")}></img>
              <figcaption> rose </figcaption>
            </div>
            <div className="images">
              <img src={require("./images/sunflower.png")}></img>
              <figcaption> sunflower </figcaption>
            </div>
            <div className="images">
              <img src={require("./images/tulip.png")}></img>
              <figcaption> tulip </figcaption>
            </div>
            <div className="images">
              <img src={require("./images/waterlily.png")}></img>
              <figcaption> waterlily </figcaption>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
