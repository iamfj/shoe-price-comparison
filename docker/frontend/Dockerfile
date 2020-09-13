FROM php:7.4-fpm-alpine

COPY ./ /var/www/html

RUN export APP_ENV=prod \
 && export APP_DEBUG=0 \
 && export DATABASE_URL= \
 && apk add --no-cache composer yarn \
 ##
 # Install symfony for production
 ##
 && composer install --no-dev --optimize-autoloader \
 && php bin/console cache:clear --env=prod --no-debug \
 && php bin/console cache:warmup \
 ##
 # Build assets for production
 ##
 && yarn install \
 && yarn encore production \
 ##
 # Cleanup build
 ##
 && rm -R /var/www/html/node_modules /var/www/html/docker /var/www/html/assets \
 && rm package.json yarn.lock composer.json composer.lock symfony.lock webpack.config.js tsconfig.json \
 && apk del composer yarn
