FROM nginx:stable

MAINTAINER vito.su@live.com

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

COPY dist/ /usr/share/nginx/html/
