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

    if ((!this.state.authenticated) && this.state.showLoginForm) {
      return(
        <div>
          <form onSubmit={this.onSubmit}>
            <label>Username:</label>
            <input
              name="username"
              value={this.state.username}
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
        </div>
      );
    }
  }
}

export default Home;
