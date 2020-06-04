FROM nginx:stable
MAINTAINER Syahkun  "syahkun@alterra.id"

RUN mkdir -p /asa-task/www/FE-PORTOFOLIO
RUN mkdir -p /asa-task/logs/nginx

COPY default.conf /etc/nginx/conf.d/
ADD build/. /asa-task/www/FE-PORTOFOLIO

WORKDIR /asa-task/www/FE-PORTOFOLIO
