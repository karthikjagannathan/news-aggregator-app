import React from 'react';
import './App.css';

import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={{color:'#84828F '}}>News Aggregator</h1>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
