import React from 'react';
import BorderedImageFrame from './BorderedImageFrame';
import SumOfTwo from './SumOfTwo';

function App() {
  return (
    <React.Fragment>
      <BorderedImageFrame src={require('./uniseek.png')} />
      <SumOfTwo num1={parseInt(Math.random()*100)} num2={parseInt(Math.random()*100)}/>
    </React.Fragment>
  );
}

export default App;
