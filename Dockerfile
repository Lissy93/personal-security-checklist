FROM jitesoft/node-yarn
COPY . /app
WORKDIR /app/web
RUN npm install
CMD ["yarn","dev"]