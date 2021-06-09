import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Article from './components/Article';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/articles" component={ArticleList} />
          <Route path="/articles/:slug" component={Article} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
