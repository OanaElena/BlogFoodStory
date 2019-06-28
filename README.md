# CREATE DATABASE WITH DOCKER

docker run -p 5432:5432 --name postgresql-blog-food -e POSTGRES_PASSWORD=pass -d postgres:alpine

docker exec -it postgresql-blog-food bash

psql -U postgres

then use the script from blogfoodstory.txt


ale mele