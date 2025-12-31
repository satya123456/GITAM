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

26 - DEC - 2025 

https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

====

Validation using Middleware in ExpressJS
npm i express-validator

===

Integrating React with ExpressJS

react-app> npm run build
this creates a dist folder, copy contents into express project "public" folder
in case if build fails fix errors or write
//@ts-ignore on the error place

modify server.ts to mention static resources

==============

Authentication and Authorization 
Authentication: check if user is valid
Authorization: check if user has sufficient previlages to access a resource

RESTful Characteristics:
1) Uniform URL identifier
2) client-server seperation
3) stateless: No Coversational state of client.
    Cookie is used to track conversational state of client
    Solution: use TOKEN based data to track client
 JWT: Json Web Token
https://www.jwt.io/

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

HEADERS:
{
  "alg": "HS256",
  "typ": "JWT"
}

PAYLOAD:
{
    "subject": "banu@gmail.com",
    "iat": 928392451,
    "exp": 999999233,
    "iss": "https://server.gitam.com",
    "authorities": ["MANAGER","GUEST"]
}

SIGNATURE:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  topSecrectSaltValueShouldbeSafe)

Salt Value: topSecrectSaltValueShouldbeSafe is used to generate a token and validate the token.

In more Complex applications we can use Private KEYS to generate a token and 
PUBLIC keys to validate token
```

npm i bcrypt jsonwebtoken
npm i @types/bcrypt @types/jsonwebtoken -D

=========

27/12/2025:

compare customer.password with provided password


  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoidmFuaXRoYUBnbWFpbC5jb20iLCJpYXQiOjE3NjY4MTE2NjQsImV4cCI6MTc2NjgxNTI2NCwicm9sZXMiOlsiQURNSU4iLCJNQU5BR0VSIl19.cP_lsJTR_YMf2Tj2sr47HMQifE-fmpd-b6dt8uMBEdU"

======
We have added tokenGuard to ProductsRoutes and OrderRoutes.

routes.push(new CustomerRoutes(app)); // allow all to login and register, no token check
app.use(tokenGuard);
routes.push(new ProductRoutes(app));
routes.push(new OrderRoutes(app));

we can have an extra middleware to see role based access
Only ADMIN can add products, modify products
All valid users can access products

==============================================

NextJs Full-Stack:

Using NextJS we can write api endpoints, Server Side React Components and client side react components

Project will have NextJS + Sequelize + React

npm create next-app@latest
select all defaults

Files to check: package.json

next.config.ts --> Configuration file

Folder structure:
app/layout.tsx --> landing page
app/page.tsx --> default route page rendered within layout.tsx
any file based routes add it in "app" folder like hello/page.tsx
http://localhost:3000/hello

"api" folder for Endpoints

npm i react-bootstrap bootstrap

ProductsCard.tsx --> Client side React Component ["use client"]
app/products/page.tsx --> Server Side React Component [ default]

===

Sequelize and Endpoints

=============

full stack applcaiton Approach 1 using ExpressJS:
We can completly build react application using json-server as mock RESTful API
Can build Backend Endpoints seperatley using ExpressJS and sequelize.
React ==> NodeJS [ExpressJS + Sequelize] => RDBMS

Once Both are ready we can run the command in react application:
npm run dev
copy build folder onto expressjs public folder and mention in expressjs static content is from public folder.


Full Stack using NextJS Approach 2:
Here preferably build both from end and backend concurrently taking case by case like
handling http://localhost:3000/products here we need Server Components and Client Components --> React specfic
In NExtJS by default react components are Server components.
Server Components can't have event-handling, hooks. Use this to fetch data and render the initial page.
Client side components we need to mention "use client"
Note: Server components can render client components, not vice-versa
Client component can call server functions [apis]

NextJS: we can have endpoints for RESTful or GraphQL WS also
----

"app" folder contains server components. NextJS uses file based routing
folder: app/products/page.tsx ==> http://localhost:3000/products
folder app/page.tsx ==> http://localhost:3000
folder app/orders/page.tsx ==> http://localhost:3000/orders
These components will be rendered inside layout.tsx [ most important part]
Compare this with react-router-dom
```
 <NavbarComponents/>
 {children}
```

New Version 16 version:
pages/api folder for Endpoints

pages/api/products.ts ==> http://localhost:3000/api/products
Handles GET and POST http request

pages/api/orders.ts ==> http://localhost:3000/api/orders
handles GET and POST http request

pages/api/products/[id].ts ==> http://localhost:3000/api/products/3
to handle PATH parameter
here we can handle GET by path parameter, delete, put and patch

============

In this application, 
we can write app/cart/page.tsx --> SERVER side component in turn using
Cart , CartList client side components.
Redux store config is same.

======

Bcrpyt and JSONwebtoken is almost the same as in ExpressJS
Bcrpyt vs Bcrpytjs

=======

Login:
Not created a Login Form ==> app/login/page.tsx
Endpoint: pates/api/users/login.ts ==> http://localhost:3000/api/users/login

=====================

Problem Statement:
Vehicle Rental application
Database models:
Vehicle, Driver, Rental, Customer

Use Case 1:
Add vehicle [4 columns]
REGNO, TYPE [HATCHBACK, SEDAN, SUV], FUEL_TYPE[ ELECTIRC, PETROL,..], COST_PER_DAY

Use Case 2:
Customer Registration ...

Use Case 3: 
Add Drivers similar to Customer
Licence Number, name, licence_exp ,..

Use case 4:
Rent a Vehicle
```
ID | VEHICLE_FK | RENT_DATE         | RETURN_DATE | DRIVER_FK           |   CUSTOMER_FK.        | AMOUNT
21.  AP01AS4144   28-12-2025 4:30       NULL        shyam@gmail.com           roja@gmail.com        0
```

Use case 5:
Return a Vehicle
```
ID | VEHICLE_FK | RENT_DATE         | RETURN_DATE | DRIVER_FK           |   CUSTOMER_FK.        | AMOUNT
21.  AP01AS4144   28-12-2025 4:30     29-12-2025        shyam@gmail.com         roja@gmail.com     5000
```

