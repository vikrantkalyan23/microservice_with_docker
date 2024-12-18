# microservice_with_docker

Microservice With Docker

# steps

npm init -y

npm install express axios

docker build -t microservice_with_docker .

docker run -d -p 3000:3000 --name microservice_with_docker microservice_with_docker

# API Endpoint

http://localhost:3000/user/<github-username>

# Tag the image for Docker Hub

docker tag microservice_with_docker <your-dockerhub-username>/microservice_with_docker:latest

# Push the image

docker push <your-dockerhub-username>/microservice_with_docker:latest

# Docker Hub repository URL

https://hub.docker.com/r/vikrantkalyan23/microservice_with_docker

