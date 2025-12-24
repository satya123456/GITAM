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

mysql> create database gitam_db;

```
Client -> NodeJS -> Express Framework -> Routes -> Controller -> Service -> database drivers -> Database
Client -> NodeJS -> Express Framework -> Routes -> Controller -> Service -> Sequelize [on top of database drivers] -> Database [ RDBMS]

Database Drivers: MySQL2 for MySQL
Tedious for  Microsoft's SQL Server

ORM: Object Relational Mapping

Objects mapped to Relational database tables.
CRUD operations are easy, Object oriented, no need to know SQL
Product.create({..}); // insert into products ..
Product.findByPK(1); // select * from products wher id = 1;

Java ORM Frameworks: Hibernate, TopLink, KODO, OpenJPA, ...
.NET: NHibernate, Entity Framework
JavaScript: Sequelize, TypeORM, Prisma

===

npm i sequelize mysql2 dotenv
 npm i @types/sequelize -D


Install REST client extension for VSCODE

=====

Task: Create Customer Model, routes, controller to handle /api/customers
Customer should have email as primary key, name as string
mapped to "customers" table without timestamp

Mapping association between => Customer, Product, Order, LineItems

Customer to Orders [ one to many association]
Orders to Customer [ many to one association]
Order to LineItems [ one to many]
LineItems to Order [many to one]
Product to LineItem[ one to many]
LineItem to Product [many to One]

https://modelarchive.databases.biz/data_models/index_all_models.html

Association: Composition or Aggregation
Order to Line Items is Composition
Line Item to Product is Aggregation

CREATE TABLE IF NOT EXISTS `orders` (`oid` INTEGER UNSIGNED auto_increment , `order_date` DATETIME NOT NULL, `total` DOUBLE PRECISION, `customer_fk` VARCHAR(255), PRIMARY KEY (`oid`), FOREIGN KEY (`customer_fk`) REFERENCES `customers` (`email`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `items` (`item_id` INTEGER UNSIGNED auto_increment , `qty` INTEGER UNSIGNED NOT NULL, `price` DOUBLE PRECISION NOT NULL, `amount` DOUBLE PRECISION, `order_fk` INTEGER UNSIGNED, `product_fk` INTEGER UNSIGNED, PRIMARY KEY (`item_id`), FOREIGN KEY (`order_fk`) REFERENCES `orders` (`oid`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`product_fk`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;


https://martinfowler.com/bliki/DomainDrivenDesign.html
https://martinfowler.com/bliki/BoundedContext.html

Assume CLient is going to send payload like below to place Order:

```
    {
        "email": "smith@gmail.com",
        "items": [
            {"product": 4, qty: 2},
            {"product": 1, qty: 3}
        ]
    }

Amount of line_items has to be computed -> price * qty - DISCOUNT + TAX
Order Total has to be computed.
Order Date also need not be sent from client.
```