FROM node:10-alpine AS base

FROM base AS build
RUN mkdir /app
WORKDIR /app

# Copy NPM package configuration and install packages before we copy the source.
# This way the cache for the packages is not invalidated when source files change.
COPY . .
RUN npm ci
RUN npm run generate

FROM nginx:1.13.10-alpine AS release
COPY --from=build /app/out /usr/share/nginx/html
