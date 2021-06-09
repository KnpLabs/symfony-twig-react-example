import { useEffect, useState } from 'react';

type Maybe<T> = T|null;

type Article = {
  id: number;
  name: string;
  content: string;
};

type User = {
  email: string;
};


async function api<T>(path: string): Promise<T> {
  const res = await fetch(`${process.env.REACT_APP_API_URL}${path}`)

  if (res.status === 401) {
    window.location.href = `${process.env.REACT_APP_SYMFONY_HOST}/login`
  }

  return res.json()
}

const useMe = (): Maybe<User> => {
  const fetchMe = async (): Promise<Maybe<User>> => {
    return api<Maybe<User>>('/me')
  }
  const [me, setMe] = useState<Maybe<User>>(null)

  useEffect(() => {
    fetchMe()
      .then(me => setMe(me))
      .catch(() => setMe(null))
  }, [setMe])

  return me
}

const useArticle = (id: number): Maybe<Article> => {
  const fetchArticle = async (id: number): Promise<Maybe<Article>> => {
    return api<Maybe<Article>>(`/articles/${id}`)
  };
  const [article, setArticle] = useState<Maybe<Article>>(null);

  useEffect(() => {
    fetchArticle(id)
      .then(article => setArticle(article))
      .catch(() => setArticle(null));
  }, [id, setArticle]);

  return article;
}

const useArticles = (): Maybe<Article[]> => {
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
  useMe,
  useArticle,
  useArticles
}
