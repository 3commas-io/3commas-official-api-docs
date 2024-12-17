FROM node:23.4.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN echo $(pwd)
RUN echo $(ls -lsa /app/package.json)
RUN echo $(ls -lsa /app/package-lock.json)

RUN npm install

RUN ls -lsa /app
