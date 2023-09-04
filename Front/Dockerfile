FROM node:3.18.3-alpine as node

EXPOSE 3000:3000

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "start"]