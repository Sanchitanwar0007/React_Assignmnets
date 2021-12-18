import React from 'react';
import './App.css';
import data from './Data'

function App() {
  return (
    <div className="site-container">
      <div className="Top">
        <p>{data.Name}</p>
        <p>{data.Id}</p>
      </div>
    </div>
  );
}

export default App;
