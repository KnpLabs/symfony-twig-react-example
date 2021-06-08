FROM node:16-alpine3.11 as base

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

##################################

FROM base as dev

ENV NODE_ENV development

COPY ./docker/entrypoint /docker/entrypoint
ENTRYPOINT ["/docker/entrypoint"]

CMD ["yarn", "start"]

EXPOSE 3000

