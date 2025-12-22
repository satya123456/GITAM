Express 5.2.1: Fast, unopinionated, minimalist web framework for Node.js
to build Web applications: Server Side Rendering
to build APIs: RESTful WS and GraphQL

RESTful Web Services:
1) Uniform Resource Identifier
http://myserver.com/api/products
2) Client server seperation of Concerns

Resource is IDENTIFIED by a URL [ generally a plural nouns like products, orders, customers,...]

HTTP methods for verbs / actions

CREATE : POST
READ: GET
UPDATE: PUT / PATCH
DELETE: DELETE [ rare, avoid this endpoint]

1) GET http://localhost:8080/api/products
Accept: application/json

get all products in the form of JSON

2) GET http://localhost:8080/api/products/3
Accept: application/json

use "PATH parameter" for single resource identification like PK
get a product whose ID is 3
In react use used useParams()

3) GET http://localhost:8080/api/products?category=mobile
Accept: application/json

GET subset -> Query PArameter ?
get all products whose category is mobile
GET http://localhost:8080/api/products?page=1&size=20
Accept: application/json

GET 20 records from page 1 [ pagination ]

In React: useSearchParams()

4)   POST http://localhost:8080/api/products
Accept: application/json
Content-Type: application/json

{
    "title": "...",
    "price": 3534.99
}

to create a new resource [ add a record]

5) PUT http://localhost:8080/api/products/3
Accept: application/json
Content-Type: application/json

{
    "title": "...",
    "price": 3534.99
}

To update the data: Major

6) PATCH http://localhost:8080/api/products/3?price=9999
Accept: application/json
Content-Type: application/json

To update the data: Small updates


Routes:
http://localhost:8080/api/products
http://localhost:8080/api/customers
http://localhost:8080/api/orders


ExpressJS is a middleware framework on top of HttpServer

Building ExpressJS application:

1) shopapp-backend %  npm init --y
2) npm i typescript express cors ts-node
3) npm i @types/express @types/cors -D
4) tsc --init

ts-node is a TypeScript execution engine and REPL for Node.js. It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript

5) npm start
"start": "ts-node ./server",


Client -> server -> routes -> controller -> service -> repository -> Sequelize to interact with database

Docker desktop.
The #1 containerization software for developers and teams

Docker Hub has software images.
Containers are applications running on docker

https://hub.docker.com/

```

a) docker pull mysql

For Windows:
b) docker run --name local-mysql –p 3306:3306 -e MYSQL_ROOT_PASSWORD=Welcome123 -d mysql

container name given here is "local-mysql"

For Mac:
docker run -p 3306:3306 -d --name local-mysql -e MYSQL_ROOT_PASSWORD=Welcome123 mysql


c) CONNECT TO A MYSQL RUNNING CONTAINER:

$ docker exec -t -i local-mysql bash

d) Run MySQL client:

bash terminal> mysql -u "root" -p

mysql> exit

```