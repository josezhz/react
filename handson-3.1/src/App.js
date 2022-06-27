import React from 'react'
import AlertBox from "./components/AlertBox/AlertBox";

function App() {
  return (
    <React.Fragment>
      <AlertBox message="Hello World" />
      <AlertBox message="Goodbye World" />
    </React.Fragment>

  );
}

export default App;
