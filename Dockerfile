FROM node:18.14.2

WORKDIR /src/App

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]