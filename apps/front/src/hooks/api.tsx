import { useEffect, useState } from 'react';

type Article = {
  id: number;
  name: string;
  content: string;
};

const getArticle = (id: number): Article|null => {
  const fetchArticle = async (id: number): Promise<Article|null> =>{
    const res = await fetch(`${process.env.REACT_APP_API_URL}/articles/${id}`)

    return res.json()
  };
  const [article, setArticle] = useState<Article|null>(null);

  useEffect(() => {
    fetchArticle(id)
      .then(article => setArticle(article))
      .catch(() => setArticle(null));
  }, [id, setArticle]);

  return article;
}

export {
  getArticle
}
