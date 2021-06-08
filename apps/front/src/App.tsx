import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a running React app!
        </p>
        <a
          className="App-link"
          href="https://blog.app.localhost"
          rel="noopener noreferrer"
        >
          Go back to twig
        </a>
      </header>
    </div>
  );
}

export default App;
