FROM node:22

COPY package.json package-lock.json ./
RUN npm install

COPY . .
CMD ["npm", "start"]


