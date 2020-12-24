FROM node:12.18.1

ENV NODE_ENV=development

WORKDIR /src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "nodemon" ]