FROM paketobuildpacks/yarn
COPY . /app
WORKDIR /app/web
CMD ["yarn","dev"]