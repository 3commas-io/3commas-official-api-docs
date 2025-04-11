FROM node:22

WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "start"]


