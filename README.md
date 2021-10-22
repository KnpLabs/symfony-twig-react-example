# symfony-twig-react-example
A proof of concept using a Twig powered Symfony app and a React SPA.

This repository is linked to our article about [How to add a front-end framework to an existing Symfony monolith](https://knplabs.com/en/blog/how-to-add-a-front-end-framework-to-an-existing-symfony-monolith).

## Run in dev env
`docker-compose up -d`

Open up http://blog.app.localhost and you should see the app.

## Run in prod env
`docker-compose -f docker-compose.prod.yml up -d`

By default the app is served on http://blog.app.localhost. To match your needs you can change this with :
```bash
sed -i s/blog\.app\.localhost/your-url/g docker-compose.prod.yaml
```
You'll also have to modify Traefik configuration to be production proof (protect or remove access to its dashboard and api).
