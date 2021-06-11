FROM node:16-alpine3.11 as dev

ARG USER_ID

RUN mkdir -p /usr/src/app
RUN deluser --remove-home node
RUN addgroup docker && \
    adduser -S -h /home/docker -u ${USER_ID:-1000} -G docker docker && \
    chown -R docker /home/docker /usr/src/app

USER docker
WORKDIR /usr/src/app

COPY --chown=docker package.json yarn.lock ./
RUN yarn install

COPY --chown=docker . ./

ENV NODE_ENV development

COPY ./docker/entrypoint /docker/entrypoint
ENTRYPOINT ["/docker/entrypoint"]

CMD ["yarn", "start"]

EXPOSE 3000

##################################

FROM node:16-alpine3.11 as build

ENV NODE_ENV production
ARG REACT_APP_SYMFONY_HOST
ARG REACT_APP_API_URL

RUN mkdir -p /usr/src/app && \
    chown 1000:1000 /usr/src/app
WORKDIR /usr/src/app
USER 1000

COPY --chown=1000 ./package.json /usr/src/app/
COPY --chown=1000 ./yarn.lock /usr/src/app/

RUN yarn

COPY --chown=1000 ./tsconfig.json /usr/src/app/
COPY --chown=1000 ./public/       /usr/src/app/public/
COPY --chown=1000 ./src/          /usr/src/app/src/

RUN yarn build

##################################

FROM nginx:1.19.0-alpine as prod

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=root /usr/src/app/build /usr/src/app/build
