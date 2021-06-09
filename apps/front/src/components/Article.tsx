import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useArticle } from '../hooks/api'

interface ParamType {
  slug: string
}

const Article = () => {
  const { slug } = useParams<ParamType>()
  const [nameSlug, id] = slug.split('_')

  const article = useArticle(parseInt(id, 10));

  if (article === null) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <h1>{article.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      <Link to="/articles">Go back to list</Link>
    </>
  )
}

export default Article
