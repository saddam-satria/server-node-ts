FROM node:14.16-alpine

WORKDIR /home/server-node-ts

COPY package*.json ./home/server-node-ts

RUN yarn install

COPY . ./home/server-node-ts

RUN yarn run build

CMD [ "yarn" , "start" ]