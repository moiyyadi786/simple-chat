# Setup

- docker pull nginx
- docker pull redis
- run docker-compose -f docker-compose.yml up --scale gatherly=2


# Helpful
## Setting up redis
docker run --name my-redis -d -p 6379:6379 redis redis-server --appendonly yes

## Setting up nginx server
docker run --name gatherly-nginx -d -p 8080:80 nginx-content

## Setting up redis-cli and connection redis instance
docker run -it --name my-redis-cli --link my-redis:redis --rm redis redis-cli -h redis -p 6379


