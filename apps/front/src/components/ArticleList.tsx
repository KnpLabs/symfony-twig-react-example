import { Link } from 'react-router-dom';
import { useArticles } from '../hooks/api';
import slugify from '../services/slugify';

const ArticleList = () => {
  const articles = useArticles();

  if (articles === null) {
    return <p>Loading...</p>
  }

  return (
    <>
      <ul>
        { articles.map((article, key) => (
          <li key={key}>
            <Link to={`/articles/${slugify(article.name)}_${article.id}`}>{article.name}</Link>
          </li>
        )) }
      </ul>
      <a href={process.env.REACT_APP_SYMFONY_HOST}>Go back to homepage</a>
    </>
  );
}

export default ArticleList
