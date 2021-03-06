FROM node:14
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
ADD . /app
CMD [ "npm", "start" ]