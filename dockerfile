FROM node:22 AS base
WORKDIR /src
COPY package.json .
RUN npm i
COPY . .
CMD npm run dev