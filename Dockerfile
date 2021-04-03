FROM node:12-alpine AS base

WORKDIR /srv

COPY package*.json /srv/

RUN npm install

COPY . /srv/

EXPOSE 3000


RUN npm run build
CMD npm start