import { Link } from 'react-router-dom';
import { useArticles } from '../hooks/api';
import slugify from '../services/slugify';

const ArticleList = () => {
  const articles = useArticles();

  if (articles === null) {
    return <p>Loading...</p>
  }

  return (
    <section className="section">
      <div className="box">
        <ul>
          { articles.map((article, key) => (
            <li key={key}>
              <Link to={`/articles/${slugify(article.name)}_${article.id}`}>{article.name}</Link>
            </li>
          )) }
        </ul>
      </div>
    </section>
  );
}

export default ArticleList
