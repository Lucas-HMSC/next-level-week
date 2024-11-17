FROM node:18

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

RUN npm install -g dotenv-cli

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["dotenv", "-e", ".env", "npm", "run", "dev"]