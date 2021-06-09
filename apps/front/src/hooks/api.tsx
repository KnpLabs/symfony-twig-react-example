import { useEffect, useState } from 'react';

type Article = {
  id: number;
  name: string;
  content: string;
};
type Maybe<T> = T|null;

async function api<T>(path: string): Promise<T> {
  const res = await fetch(`${process.env.REACT_APP_API_URL}${path}`)

    return res.json()
}

const getArticle = (id: number): Maybe<Article> => {
  const fetchArticle = async (id: number): Promise<Maybe<Article>> => {
    return api<Article|null>(`/articles/${id}`)
  };
  const [article, setArticle] = useState<Maybe<Article>>(null);

  useEffect(() => {
    fetchArticle(id)
      .then(article => setArticle(article))
      .catch(() => setArticle(null));
  }, [id, setArticle]);

  return article;
}

const listArticles = (): Maybe<Article[]> => {
  const fetchArticles = async (): Promise<Maybe<Article[]>> => {
    return api<Maybe<Article[]>>(`/articles`)
  }
  const [articles, setArticles] = useState<Maybe<Article[]>>(null);

  useEffect(() => {
    fetchArticles()
      .then(articles => setArticles(articles))
      .catch(() => setArticles(null))
  }, [setArticles]);

  return articles;
}

export {
  getArticle,
  listArticles
}
