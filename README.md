# node-docker-app
---

This is a sample node js web application which uses [express.js](expressjs.com) framework.

There is a ```Dockerfile``` in the root of the application. This ```Dockerfile``` can be used to create a ```docker``` image which then can be launched in a ```docker``` container.

## How to run ?

- Clone the repo using ```git clone https://github.com/riteshsangwan/node-docker-app.git```
- cd into the cloned directory ```cd node-docker-app```
- build the docker image using current directory as context ```docker build -t yourusername/yourrepository .```
- run the image using docker run command ```docker run -p 80:4040 -d yourusername/yourrepository```