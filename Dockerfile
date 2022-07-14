
# build the code
FROM node:16.14.2-slim AS builder
WORKDIR /server-node-ts

# Install devDep & dep
COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

COPY tsconfig.json ./tsconfig.json
COPY src ./src
COPY public ./public

RUN yarn run build

# build the code
FROM node:16.14.2-slim AS production

WORKDIR /server-node-ts

COPY --from=builder /server-node-ts/package.json /server-node-ts/package.json 
COPY --from=builder /server-node-ts/yarn.lock /server-node-ts/yarn.lock 

RUN yarn install --production

COPY --from=builder /server-node-ts/build /server-node-ts/build 
COPY --from=builder /server-node-ts/public /server-node-ts/public 


CMD [ "yarn", "start" ]