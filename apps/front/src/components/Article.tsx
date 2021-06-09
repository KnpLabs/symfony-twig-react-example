import { useParams } from 'react-router'
import { getArticle } from '../hooks/api'

interface ParamType {
  slug: string
}

const Article = () => {
  const { slug } = useParams<ParamType>()
  const [nameSlug, id] = slug.split('_')

  const article = getArticle(parseInt(id, 10));

  if (article === null) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <h1>{article.name}</h1>
      <div dangerouslySetInnerHTML={{__html: article.content}}></div>
    </>
  )
}

export default Article
