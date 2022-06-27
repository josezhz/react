import React from 'react';
import BorderedImageFrame from './components/BorderedImageFrame';
import SumOfTwo from './components/SumOfTwo';

function App() {
  return (
    <React.Fragment>
      <BorderedImageFrame src={require('./uniseek.png')} />
      <SumOfTwo num1={parseInt(Math.random()*100)} num2={parseInt(Math.random()*100)}/>
    </React.Fragment>
  );
}

export default App;
