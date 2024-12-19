FROM node:hydrogen-alpine
COPY . /app
WORKDIR /app/web
RUN yarn add -D vite
EXPOSE 5173
CMD ["yarn","dev", "--host", "0.0.0.0"]