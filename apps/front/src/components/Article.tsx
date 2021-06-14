import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useArticle } from '../hooks/api'

interface ParamType {
  slug: string
}

const Article = () => {
  const { slug } = useParams<ParamType>()
  const [, id] = slug.split('_')

  const article = useArticle(parseInt(id, 10));

  if (article === null) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="section">
      <h1 className="title">{article.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <Link className="button is-light" to="/articles">Go back to list</Link>
    </div>
  )
}

export default Article
