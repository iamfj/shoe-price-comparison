FROM php:7.4-fpm-alpine

COPY ./ /var/www/html

RUN apk add --no-cache composer yarn \
 ##
 # Install symfony for production
 ##
 && composer install --no-dev --optimize-autoloader \
 && APP_ENV=prod APP_DEBUG=0 php bin/console cache:clear \
 && APP_ENV=prod APP_DEBUG=0 php bin/console cache:warmup \
 ##
 # Build assets for production
 ##
 && yarn install \
 && yarn encore production \
 ##
 # Cleanup build
 ##
 && rm -R /var/www/html/node_modules /var/www/html/docker /var/www/html/assets \
 && apk del composer yarn
