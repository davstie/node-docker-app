# Official node base image
FROM node:slim
# Maintainer
MAINTAINER Ritesh Sangwan <sangwan.ritesh@yahoo.in>
# Bundle app source
COPY . /src
# Install app dependencies
RUN cd /src; npm install

EXPOSE 4040
CMD ["node", "/src/server.js"]