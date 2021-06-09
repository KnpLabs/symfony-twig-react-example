<?php

namespace App\Twig;

use Exception;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FrontendPathExtension extends AbstractExtension
{
    const ROUTES = [
        'articles.list' => 'articles',
        'articles.show' => 'articles/{slug}_{id}',
    ];

    private string $baseUrl;

    public function __construct(string $baseUrl)
    {
        $this->baseUrl = $baseUrl;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('frontPath', [$this, 'frontPath'])
        ];
    }

    public function frontPath(string $name, array $params = []): string
    {
        if (!array_key_exists($name, self::ROUTES)) {
            throw new Exception("The route {$name} is not defined.");
        }

        $keys = array_keys($params);
        $search = array_map(fn ($key) => "{{$key}}", $keys);

        $path = str_replace($search, array_values($params), self::ROUTES[$name]);

        return "{$this->baseUrl}/{$path}";
    }
}
