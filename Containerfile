FROM node:17-alpine


WORKDIR /app


COPY index.js .


RUN["node", "index.js"]
