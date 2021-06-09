<?php

namespace App\Controller;

use App\Collection\Articles;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{
    private Articles $articlesCollection;

    public function __construct(Articles $articlesCollection)
    {
        $this->articlesCollection = $articlesCollection;
    }

    public function index(Request $request): Response
    {
        $highlightedArticle = $this->articlesCollection->getHighlighted();

        return $this->render('homepage.html.twig', [
            'highlightedArticle' => $highlightedArticle
        ]);
    }
}
