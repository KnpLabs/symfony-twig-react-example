import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/articles/:slug" component={Article} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
