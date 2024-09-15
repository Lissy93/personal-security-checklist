FROM node:hydrogen-alpine
COPY . /app
WORKDIR /app/web
RUN yarn add -D vite
CMD ["yarn","dev"]