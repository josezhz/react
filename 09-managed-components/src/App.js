import React from 'react';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container mt-5 border border-5 rounded'>
      <TaskList />
    </div>
  );
}

export default App;
