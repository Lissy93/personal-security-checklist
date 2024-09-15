FROM node:hydrogen-alpine
COPY . /app
WORKDIR /app/web
CMD ["yarn","dev"]