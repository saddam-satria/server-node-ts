FROM node:14.16-alpine

WORKDIR /home/server-node-ts

COPY package*.json ./

RUN yarn install

COPY . ./

RUN yarn run build

CMD [ "yarn" , "start" ]