FROM debian:latest
MAINTAINER Mygel Bergstresser version: 0.1

ENV HUGO_VERSION=0.26
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.deb /tmp

RUN dpkg -i /tmp/hugo_${HUGO_VERSION}_Linux-64bit.deb \
	&& rm /tmp/hugo_${HUGO_VERSION}_Linux-64bit.deb

RUN mkdir /www
WORKDIR /www