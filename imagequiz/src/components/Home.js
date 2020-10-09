import React from 'react';
import "./Home.css";

class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="loginButton">
          <button>Login</button>
        </div>
        <div>Homepage</div>
      </div>
    );
  }
}

export default Home;
