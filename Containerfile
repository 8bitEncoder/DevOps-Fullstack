FROM node:20-alpine


WORKDIR /app


COPY index.js .


EXPOSE 5020


CMD ["node", "index.js"]
