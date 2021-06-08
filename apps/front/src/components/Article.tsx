import { useParams } from 'react-router'

const Article = () => {
  const { slug } = useParams()

  return (
    <div>Article with slug {slug}</div>
  )
}

export default Article
