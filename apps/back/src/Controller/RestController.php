<?php

namespace App\Controller;

use App\Collection\Articles;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class RestController
{
    private Articles $articlesCollection;

    public function __construct(Articles $articlesCollection)
    {
        $this->articlesCollection = $articlesCollection;
    }

    public function listArticles(): Response
    {
        return new JsonResponse($this->articlesCollection->getAll());
    }

    public function getArticle(int $id): Response
    {
        $article = $this->articlesCollection->getOne($id);

        if ($article === null) {
            return new JsonResponse(
                "Unable to find an article with ID={$id}",
                404
            );
        }

        return new JsonResponse($article);
    }
}
