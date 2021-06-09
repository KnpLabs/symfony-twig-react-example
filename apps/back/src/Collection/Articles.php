<?php

namespace App\Collection;

class Articles
{
    const ARTICLES = [
            [
                'id'      => 23,
                'name'    => 'Yolo article',
                'content' => '<p>Lorem ipsum dolor sit amet. Veritatis officiis <em>Et autem aut repellat illum est internos asperiores</em>  porro quibusdam? Ex minima voluptatem aut aperiam expedita aut ullam unde. Qui molestias veritatis sit pariatur molestiae id similique reiciendis id sunt sint aut Quis odio. Ut voluptatem quis ut libero minus  temporibus consequatur. </p>
<dl>
    <dt><dfn>Eum minus velit? </dfn></dt><dd>Et voluptatum  et fugiat nemo ut omnis accusantium. </dd>
    <dt><dfn>Et odio galisum aut consectetur voluptas. </dfn></dt><dd>Ab galisum earum ut quia odit non accusamus dolor. </dd>
    <dt><dfn>Aut minima atque vel molestias autem. </dfn></dt><dd>Et repudiandae sunt cum eaque unde. </dd>
    <dt><dfn>Vel quidem omnis qui voluptatem harum. </dfn></dt><dd>Non suscipit consequatur et quod aspernatur vel quod enim. </dd>
</dl>
<pre><code>&lt;!-- Ut animi illo et laborum omnis et dolorem dolor. --&gt;<br>&lt;maiores&gt;Sed illo explicabo et harum quas et quod tempore.&lt;/maiores&gt;<br>&lt;earum&gt;Non nihil laborum.&lt;/earum&gt;<br>&lt;magni&gt;Et quas delectus ut suscipit eveniet.&lt;/magni&gt;<br></code></pre>
<p>Ut quaerat officia cum aperiam veniam et distinctio voluptatem et alias impedit eos unde distinctio et error ducimus. Ut fugit nihil ut ipsum id voluptatem! Qui blanditiis eius est voluptate nostrum ut error illum et omnis amet qui necessitatibus recusandae aut illo illum qui nobis nihil! Qui dolorem dolores ad error quam ab beatae quod ut aliquid obcaecati qui commodi? </p>
<blockquote cite="https://www.loremipzum.com">Est quae iste aut fugit commodi aut soluta rerum aut modi exercitationem! </blockquote>
<p>Cum obcaecati enim aut quia nostrum a sequi nesciunt et voluptatem deserunt id nemo maiores? In velit asperiores sed distinctio enim qui rerum nobis. Sit velit nihil <em>Soluta qui voluptatem esse est quos omnis</em>  enim assumenda rem consectetur mollitia. </p>',
            ],
            [
                'id'      => 25,
                'name'    => 'Lorem ipsum dolor sit amet',
                'content' => '<p>Lorem ipsum dolor sit amet. Et omnis obcaecati aut distinctio quidem id officiis delectus et rerum neque non accusamus pariatur ut officia maiores qui consequatur aliquid. Eos obcaecati ipsum aut optio dolores vel alias laboriosam et debitis voluptas et aspernatur quidem. Ea voluptate deserunt <em>Ut perferendis et itaque quasi</em>. </p>
<pre><code>&lt;!-- A voluptatem nihil est officiis illo et placeat perferendis. --&gt;<br>&lt;et&gt;Aut ducimus dicta eos recusandae deserunt eos illo tempora.&lt;/et&gt;<br>&lt;ullam&gt;33 quasi illum est voluptatem rerum aut ipsa doloribus.&lt;/ullam&gt;<br>&lt;nemo&gt;Non numquam beatae vel provident suscipit aut aliquam temporibus!&lt;/nemo&gt;<br></code></pre>
<p>Eos Quis reiciendis eos soluta voluptatem et cumque placeat! Qui dolores voluptatem aut autem possimus <em>Quo asperiores quo porro aliquam et quae incidunt et quia quam</em>. Qui esse eius non sint aliquid qui consequuntur autem et quae doloremque? Aut illum aspernatur aut voluptas quibusdam et placeat galisum nam sint maiores sed odio cumque! </p>
<blockquote cite="https://www.loremipzum.com">Vel laborum perferendis 33 nesciunt velit qui dolore veniam qui quia culpa est Quis distinctio sed recusandae quis. </blockquote>
<p>Quo dolores magni <em>Qui consequatur non pariatur sunt in totam voluptas</em> in eius sunt non doloremque doloribus. In repellendus quia quo minus maiores <strong>Aut aliquam rem quaerat laudantium sit cumque optio et iste impedit</strong>. </p>
<dl>
    <dt><dfn>Sit dolor fugit? </dfn></dt><dd>Aut consectetur blanditiis ex quod excepturi ut porro adipisci aut aperiam voluptatem. </dd>
    <dt><dfn>Est numquam pariatur. </dfn></dt><dd>Aut nobis rerum ut deserunt illo id modi modi aut rerum rerum. </dd>
    <dt><dfn>Cum tempore voluptatum qui illum sequi. </dfn></dt><dd>Nam eaque sunt et  quos! </dd>
    <dt><dfn>Eum temporibus eaque. </dfn></dt><dd>Est officiis voluptatibus et repellat mollitia. </dd>
</dl>',
            ]
    ];

    public function getAll(): array
    {
        return self::ARTICLES;
    }

    public function getOne(int $id): ?array
    {
        foreach (self::ARTICLES as $article) {
            if ($article['id'] === $id) {
                return $article;
            }
        }

        return null;
    }

    public function getHighlighted(): array
    {
        return self::ARTICLES[0];
    }
}
