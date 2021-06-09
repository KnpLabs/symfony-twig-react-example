import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useMe } from './hooks/api'
import Article from './components/Article';
import ArticleList from './components/ArticleList';

function App() {
  const me = useMe()

  return (
    <div className="container">
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            Blog
          </p>
          <p className="subtitle">
            Powered by React
          </p>
          { me && (
            <>
              <span className="tag">Hello {me.email}!</span>
              <a 
                className="button is-danger" 
                href={`${process.env.REACT_APP_SYMFONY_HOST}/logout`}
              >
                Logout
              </a>
            </>
          )}
        </div>
      </section>

      <a className="button is-fullwidth is-success is-light" href={process.env.REACT_APP_SYMFONY_HOST}>Go back to homepage</a>

      <Router>
        <Switch>
          <Route exact path="/articles" component={ArticleList} />
          <Route path="/articles/:slug" component={Article} />
        </Switch>
      </Router>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>React</strong> app.
          </p>
          <figure className="image is-64x64">
            <img alt="react logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
          </figure>
        </div>
      </footer>
    </div>
  );
}

export default App;
