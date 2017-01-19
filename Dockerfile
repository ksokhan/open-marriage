FROM node:4.7
RUN npm install -g nodemon foreman
COPY package.json /tmp/package.json
RUN cd /tmp && npm install -q
RUN mkdir /app && cp -a /tmp/node_modules /app/
WORKDIR /app
CMD ["nf", "start"]
