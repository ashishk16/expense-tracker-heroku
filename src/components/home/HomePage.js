import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
render(){
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration Updated</h1>

      <h2>Get Started</h2>
      <p>React, Redux and React Router in ES6 for ultra responsive web apps.</p>
      <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>
  );
}
}

export default HomePage;
