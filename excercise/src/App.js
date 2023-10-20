import React, { useState } from 'react';
import './App.css';

import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';

function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1><b>Bright Ascension Ltd </b></h1>
        <nav classname="navbar">
  <a className={`task ${selectedTask === 1 ? 'active' : ''}`} onClick={() => setSelectedTask(1)}>Task 1</a>
  <a className={`task ${selectedTask === 2 ? 'active' : ''}`} onClick={() => setSelectedTask(2)}>Task 2</a>
  <a className={`task ${selectedTask === 3 ? 'active' : ''}`} onClick={() => setSelectedTask(3)}>Task 3</a>
  <a className={`task ${selectedTask === 4 ? 'active' : ''}`} onClick={() => setSelectedTask(4)}>Task 4</a>
</nav>

        {selectedTask === 1 && <Task1 />}
        {selectedTask === 2 && <Task2 />}
        {selectedTask === 3 && <Task3 />}
        {selectedTask === 4 && <Task4 />}
      </header>
    </div>
  );
}

export default App;
