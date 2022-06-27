import React from 'react';
import NumberBox from './components/NumberBox'

function App() {
  return (
    <React.Fragment>
      <NumberBox initialValue={1} />
      <NumberBox initialValue={2} />
      <NumberBox initialValue={3} />
      <NumberBox initialValue={4} />
    </React.Fragment>
  );
}

export default App;
