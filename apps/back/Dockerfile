FROM composer:2 as composer

##################################

FROM php:8.0-fpm-alpine3.13 as base

RUN apk add --no-cache --virtual=.build-deps \
        autoconf==2.69-r3 \
        g++==10.2.1_pre1-r3 \
        make==4.3-r0 \
    && pecl install apcu-5.1.19 \
    && docker-php-ext-enable apcu \
    && apk del .build-deps

WORKDIR /usr/src/app

COPY --chown=1000:1000 . /usr/src/app

RUN PATH=$PATH:/usr/src/app/vendor/bin:bin

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN composer install --no-scripts --prefer-dist --no-interaction

##################################

FROM base as dev

ENV APP_ENV dev
ENV TRUSTED_PROXIES 172.0.0.0/8

##################################

FROM base as prod

ENV APP_ENV prod
ENV TRUSTED_PROXIES 172.0.0.0/8

COPY --chown=1000:1000 . /usr/src/app
