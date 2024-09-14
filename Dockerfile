FROM jitesoft/node-yarn
COPY . /app
WORKDIR /app/web
CMD ["yarn","dev"]