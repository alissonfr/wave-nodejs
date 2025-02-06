FROM node:23.6-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

RUN npm run migrate
RUN npm run test
CMD ["npm", "start"]