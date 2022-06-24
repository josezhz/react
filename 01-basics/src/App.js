import React from 'react';
import logo from './logo.svg'
import './style.css'

function App() {
  return (
    <React.Fragment>
      <h1 style={
        {
          color: "red",
          backgroundColor: "green"
        }
      }>Hello World</h1>
      <p>hahahaha</p>
      <img src={logo} alt=""/>
    </React.Fragment>
  );
}

export default App;