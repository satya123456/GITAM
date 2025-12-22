# React
```
Banu Prakash C
Full Stack Architect,
Co-founder Lucida Technologies Pvt Ltd.,
Corporate Trainer,
Emails: banuprakashc@yahoo.co.in; banuprakash.cr@gmail.com

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/GITAM

Softwares Required:
Visual Studio Code.
Chrome Web Browser
NodeJS Latest LTS

node --version
```
Functional style of Programming.

1) High Order Functions [HOF]
* treat functions as first class members [primitive or object]
a) function can accept function as argument
b) function can return a function

goal of HOF: Open Close Principle - SOLID Design Principle
Open Close Principle: closed for change, but open for extension

```
    // action will be a function
    // OCP
   function forEach(items, action) {
    for(let i = 0; i < items.length; i ++) {
        action(items[i]);
    }
   }

   let numbers = [5,7,11,4,77,11];

   forEach(numbers, console.log);
   forEach(numbers, alert);
```
https://rxmarbles.com/

Commonly used HOF:
1) forEach -> iterate and perform action on each element
2) filter -> to get subset
3) map -> transform data
4) reduce -> aggregate

=====

HOF : function can return a function --> Closure
Closure: returned function can access all the members of outer function.

Memoization is a computer programming optimization technique that speeds up a program by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

=============

ES2015 - ES6 version of JavaScript

1) introduced block level members using let and const
let and const --> no hoisting

with var:
```
    var g = 100;
    function doTask(){
        console.log(this);
        var a = 10;
        if(g > a) {
            var b = 20;
            c = 30;
        }
        console.log(g, a, b, c);
    }
    doTask();
```

adding 
'use strict' to JS file, global hoisting is prevented and "this" context is not passed on to the function -> results in undefined while using "this"

2) Template string -> look into hof toCard() ``
3) Promise API, to execute async code on Micro Task Queue on a seperate thread

console.log("Another Task!!!");
console.log("Bye!!!");
```

Day 2:

Promise API --> execute async code in a seperate thread.
4) Arrow functions
5) Async and Await
Async and await are syntatical sugar on top of promise api

6) Enhanced Object literal

```
    let title = "iPhone 18";
    let price = 890000.00

    let product = {title, price};

    // same as
    let product = {
        title: title,
        price: price
    }

```

7) Destructuring Objects

```
 let product = {
        title: "iPhone 18",
        price: 890000.00
    }

let {title, price} = product; // here title and price becomes local variable
```

8) Destructuring arrays

```
    let data = [63, 22, 61];

    let [a, b, c] = data; // a -> 63, ..

    let colors = ["red", "green", "blue", "pink", "orange"];

    let [r, g, ...others] = colors;

    r --> red
    g -> green
    others -> ["blue", "pink", "orange"];
```

9) Clone

```
 let data = [63, 22, 61];
 let ref = data;
 ref[0] = 999;
 data[0] ---> 999
 let dups = [...data]; //clone
 dups[1] = 111;
 data[1] --> 22

```

10) class
11) Modules

Module System: for better encapsulation [private , public ]
1) IIFE -> Immediately Invoked Function Expression

```
let CustomerModule = ( function(){
    let data = [];
    function add(a) {

    }

    return {
        add
    }
})();

let ShopModule = (
    function() {
        let data = ["iphone", "sony"];

        // public
        function add(a) {
            data.push(a);
        }

        // public
        function list() {
            return data;
        }

        return {
            add, list
        }
    }
)();

ShopModule.add("Wacom"); // valid
ShopModule.list(); // valid

ShopModule.data; // error, private to ShopModule

```

2) CommonJS module --> default used by NodeJS
module.exports and require [import]

3) AMD -> Asynchronous Module Defintion
4) ESM -> ES 6 Module System
export and import

===========

PART 2:
NodeJS -> platform
Why NodeJS?
1) Building APIs -> RESTful WS / GraphQL Ws
2) Building Traditional Web applicaiton --> SSR [ like PHP, Servlet, ASP.NET]
3) Real time applications like ChatBot
4) Building client side web applications 

Why NodeJS for client side web applications like using with React, Angular, ...

1) We may prefer to write code in different languages like CoffeeScript, livescript, DART, TypeScript, latest version of JS

TypeScript : statically typed language, to make code TypeSafe.

Browser doesn't understand them.
We use Transpiler or Compiler to convert them into understandable code in Browser
Babel --> Transpiler -> convert higher version of JS to lower version
TSC --> compiler -> TS -> JS

2) Unit testing, Integration testing, E2E testing
3) Lint --> Static code analysis [coding stds and conventions]
4) Minify
```
    function doTask() {
        for (i = 0; i < 10; i ++) {
            console.log(i);
        }
    }

    gets converted to:
     function doTask(){for(i=0;i< 10;i++) {console.log(i);}}

```
5) Uglify

```
    function getEmployees(){
        let employees = getData();
    }

    gets into:
    function _ge(){
        let _e = getData();
    }
```

6) Bundling:
I may have product.js, customer.js, payment.js, order.js, address.js,,,
I may have product.css, customer.css, ....

index.html
``` 
    <script src="product.js"></script>
    <script src="customer.js"></script>
    <script src="address.js"></script>
    <script src="order.js"></script>
    <script src="payment.js"></script>
    <link src="product.css" rel="stylesheet">
```
Above lines leads to multiple HTTP requests to the server --> 7 network calls from browser . Also ordering is important

Solution is bundling

```
index.html
    <script src="bundle.js"></script>
```

=============

NodeJS project:

1) npm init --y

This creates a package.json file
this file is where we configure dependencies and scripts

2) npm i lodash
3) npm i jest -D

lodash --> JS util library
jest --> Testing Library
Above statements will install modules and transitive depenendent modules into "node_modules" folder

Team members will execute:
node_examples> npm install

---

Package Managers:
npm --> Node package manager --> default with NodeJS
yarn -> package manager , need to install
PNPM --> package manager

package managers to download dependencies, execute script, publish modules
https://www.npmjs.com/

npm start

=====

Day 3:

JavaScript build tool:
1) Grunt
2) Gulp
3) Webpack
4) Vite
5) parcel
...

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 

Webpack: excellent choice for build tool --> client side web applicaton
supports bundling also along with above mentioned tasks.

Upto FEB 2025 - webpack was the default build tool to create scaffolding code for react, angular, ...

-----

Simple Webpack project:
Step 1: Intitialize a node project
npm init --y 
Step 2: install webpack dependencies
npm i webpack webpack-cli webpack-dev-server -D

Step 3: install transpiler - babel
When we are using latest features of JS in development but the target platform doesn't support them.
Use Babel / Tracuer to transpile higher version of JS to lower version

npm i @babel/core babel-loader @babel/preset-env -D

babel-loader: supports ES 6 module system. NodeJS supports CommonJS module System

Example: import Product from './Product'

babel-loader loads "Product.js" gives it to @babel/core [transcompiler]
makes use of @babel/preset-env

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) 
Polyfills are code snippets, usually JavaScript, that provide modern functionality to older browsers or environments that don't natively support it.
Example for Promise, Set, Map, ...

Polyfill library: 
https://www.npmjs.com/package/core-js


Example:
```
let add = (x, y) => x + y;
let title = "iPhone 18";
let price = 98000.00

let product = {title, price};

transform into

function add(x,y) {
    return x + y;
}

var product = {
    title: title,
    price: price
}
```
To configure presets:
babel.config.json
babel.config.js
.babelrc

```

 npm run dev

> webpack-example@1.0.0 dev
> webpack --mode development

asset bundle.js 8.73 KiB [emitted] (name: main)
runtime modules 695 bytes 3 modules
cacheable modules 3.65 KiB
  ./src/index.js 1010 bytes [built] [code generated]
  ./src/Product.js 1.91 KiB [built] [code generated]
  ./src/lib.js 766 bytes [built] [code generated]

==

npm run prod

> webpack-example@1.0.0 prod
> webpack --mode production

asset bundle.js 1.84 KiB [emitted] [minimized] (name: main)
orphan modules 2.66 KiB [orphan] 2 modules
./src/index.js + 2 modules 3.65 KiB [built] [code generated]
```

npm i html-webpack-plugin -D

bundle.34534!sdf42.js
bundle.dfdfg$122cw.js

Also we may have many bundle files

webpack-dev-server -- miniature HTTP web server useful in development env only

npm i @babel/preset-react 


====

Day 4

Steps:
1) 
import Product from "./Product"; 

a) babel-loader loads Product.js
b) gives it to @babel/core - transcompiler
c) @babel/core uses @babel/preset-env for syntax transform and polyfills

2) import './styles.css'
a) css-loader loads styles.css
b) loaded styles.css is placed inside style tags in index.html by style-loader

==============

Build tool Vite :veet -- FEB 2025 for react

next-generation build tool, built in support for typescript, JSX, CSS, ..
Better server for instant startup

npm create vite@latest
Vanilla
JavaScript

npm run dev

==========================
MVC -> Model View Controller
Model --> state / data
View -> Presentation
Controller -> Application Logic

React : View library by facebook
https://www.youtube.com/watch?v=8pDqJVdNa44&t=4474s
Angular: MVC framework by google

==================================

Thinking in terms of React components.
Atoms: Basic Building blocks of matter such as button, input, label. They're not useful on their own.
Most of the time we use them from existing libraries like react-bootstrap, mui, primeReact, KendoUI, Adobe Spectrum

Molecules: Grouping Atoms together, like Card, Panel
Many a times existing libraries provide them

Organisms: Combining molecules -> Navigation bar
Templates: group of organisims
Pages.

======
```
folder
    lib
        transaction.js
    features
        products
            ProductList.jsx
            Product.jsx
            ProductForm.jsx
        customer
        order
    tests   
        products
            ProductList.test.js
            Product.test.js
```

Component files should use CamelCase, start with uppercase, end with jsx/tsx
Library/ helper / utility files start with lowercase, uses CamelCase , ends with "js/ts"

Testing files should be the same name as Component/library being test but suffix it with "test" or "spec" .js

=================================

React Components:
1) React.createElement() --> JSX to JS object
2) Class Component
    a) inherit from Component
    b) override render() method
    c) render method should return JSX
```
    class ProductList extends Component {
        render() {
            return <div>
                <h1> Hello World!!!</h1>
            </div>
        }
    }

```
    returned JSX from render() - React.createElement() - JSX to JS

3) Functional components return JSX
 returned JSX from function - React.createElement() - JSX to JS

==
Should choose renderers like react-dom / react-native / react-tv for converting the returned JS from React.createElement() to View

========================================

First React project:
1) npm create vite@latest
customer-app
react
javascript

npm run dev
  "test": "vitest --coverage --coverage.inclue=src/components/*.jsx",
  
=====

Day 5:

props - data passed from parent to child component.
like attributes of DOM element

```
    <img src="avatar.png" width="50px" />
    here we can say src and width are props
    In DOM terminology it is attributes
```
Warning:
CustomerList.jsx:26 Each child in a list should have a unique "key" prop.

key helps us in better Reconcilliation.

https://legacy.reactjs.org/docs/reconciliation.html


```
DOM -> VDOM [Virtual DOM]
any changes will be not updating DOM, instead it makes a copy of VDOM and make changes to VDOM copy
```

React Event handling: onEvent like onClick, onKeyPress, onChange, ...

==========

Day 6 [SATURDAY]

JS Unit Testing libraries / frameworks
1) Mocha [Prefered for Server side JS]
2) Jasmine [Angular]
3) JEST [webpack]
4) vitest [vite]

few assertion libraries vary among them.

AAA --> Assemble Action Assert [TCER]

npm i vitest jsdom -D

====

RTL - React Testing library

https://testing-library.com/docs/react-testing-library/intro/

npm install  @testing-library/react @testing-library/dom -D
https://testing-library.com/docs/queries/about/#types-of-queries

Prefer below APIs for getting elements / components instead of using DOM
document.querySelector('.tmpl-headerNavItem_label')

```
Below functionalities are available in "screen" object of RTL
getByRole [form elements]
Example:
getAllByRole('button') --> gets all buttons in UI
getByLabelText
getByPlaceholderText
Example:
getByPlaceholderText(/search by name/)
getByText
getByText(/Customer Application/i)
getByTestId

similarly for queryBy and findBy
```


Code Coverage -> How much of your code has been tested?
* istanbul
* coverage-v8

npm i @vitest/coverage-v8 -D

Testing individual files:
npm test -- src/lib/lib.test.js

==========

Testing in Isolation, need to mock dependency

================================================

Component Life-Cycle methods of class components.

Mounting Phase: occurs when first time component is mounted on to the screen
constructor() -> render() -> componentDidMount()
initialization the state -> render() with initial data -> API calls in componentDidMount() then update the state.

Don't make API calls in constructor -> this leads to FCP issue 

Updating Phase:
1) New props from parent or State changes -> shouldComponentUpdate() -> false
1) New props from parent or State changes -> shouldComponentUpdate() -> true -> render() -> componentDidUpdate()
Make dependent API calls in componentDidUpdate()

shouldComponentUpdate() -> conditionally update the component

npm install @faker-js/faker 

CSS Framework: bootstrap
npm i bootstrap
====

8-DEC: TypeScript

Typescript is JS with syntax for types.

JS -> loosely typed, dynamically typed language

var data = "Tim"; // string
data.toUpperCase();

data = 34; // number
data++;

TS - Strongly typed, static typing built on top of JS.
var data = "Tim"; // at this point typescript will fix data as string type
data = 21; // error in ts
TypeSafe environment.

TypeScript compiler to compile ts files into js files => engine for exception.

Part 1:
Understand typescript compiler, tsconfig.json and basic types.
Basic data types in TS: string, number and boolean

npm init --y
npm i typescript -D
this provides type system libraries and tsc [compiler]

Generate a tsconfig.json file
tsc --init
"rootDir": "./src", 
"outDir": "./build/js",
"target": "es2016", 
 "include": ["src"]

 tsc
 Below config doesn't create "js" file if any issues in "ts" file
 "noEmitOnError": true, 


  "lib": ["ES2023.Array","DOM"], 
  DOM -> console, document , ...
  Specfic version of JS to be used

  ===

  Types:
  1) string
  2) number
  3) boolean
  4) any
    tsc
  node ./build/js/anyExample.js
  5) unknown
  6) type [the most important type]
  To define custom types like struct of C / classes of OOP,..
  Basically used to define the shape of object

  ```
    type Person = {
        name: string,
        age: number
    }
    function addPerson(person:Person) : void {
        ...
    }
    addPerson({"name": "Tim", "age": 52}); // valid
    addPerson({"name": "Tim"}); // invalid
    addPerson({"name": "Tim", "age": 52, "email":"tim@gmail.com"}); // invalid 

    // optional attribute
     type Person = {
        name: string,
        age: number,
        email?:string 
    }
    addPerson({"name": "Tim", "age": 52}); // valid

    addPerson({"name": "Tim", "age": 52, "email":"tim@gmail.com"}); // valid 
  ```

  Type:
   a) union type
   ```
        type Customer = Person & {
            "phone": string,
            "address" : string
        }

    let customer:Customer = {
            "name": "Tim",
         "age": 52, 
         "email":"tim@gmail.com",
         "phone": "1234567890"
         "address" : ""
         }
   ```

   b) TypeScript template literal types

   TypeAssertion aka TypeCasting
   Sometimes we have info about type that typescript can't know, in these situations we use type assertion

=======
Date :  9-DEC

Generics.
- functions, types, class

Conditional Types using Generics

T[P] will be name
T[P] will be email
T[P] will be phone

====

The infer keyword
used within conditional types to extract or "infer" a type from another type

For Example:
1) we need to extract what is the return type of a function
2) we need to know first what is first argument to a function
3) what are the types of parameters we need to pass to a function

Many a times we will use JS libraries like React, lodash, .. which are in JS and not in TypeScript


return value of any function
take it/ infer as R

==========

10-DEC-2025:

Recap:

Typescript:
1) basic types like string, number and boolean
2) any and unknown type
3) type to define shape of object
4) typecasting "as" keyword
5) Mapped type
    given a type create another type like Immutable, Optional, ...
6) infer keyword: deduce a type from another type like identify return type of a function,
first argument of a function, second argument, parameters, ...
7) Generics 

8) undefined, void and null 

let data; // here value of data is undefined

let person = null; // null is generally used to initialize an object

function doTask(): void {
    console.log("Hello!!!");
}
===================

Remaining TS is pending...

React using TypeScript.

Using JavaScript in TypeScript projects
npm i lodash
npm i @types/lodash

All type definitions are prefixed with @types/library
like @types/react @types/node @types/lodash
https://github.com/DefinitelyTyped/DefinitelyTyped

If for a library type-definition is not available we need to write our own typings.d.ts file for the project

declare module 'lodash' {
  export function random(max: number): number;
}

React is a JS library to use it in TS:
npm i react @types/react

========================================


npm create vite@latest
react-sample
React
TypeScript

=========

Class Components can have state and life-cycle methods

Functional Components
React Hooks, introduced in React 16.8, are functions that enable functional components to "hook into" React state and lifecycle features that were previously only available in class components. 

By doing this we no longer need to use class components, 99% of our components will be functional components

Class components are heavy [extends Component]

React Hooks:
1) useState
2) useEffect
3) useReducer
4) useContext
5) useCallback
6) useRef

Hook useState: this hook is used to declare state members in functional component

```
    class StateComp extends Component {
        state = {
            age: 18,
            name: 'Roger
        }

        setName(n) {
            this.setState({
                name: n
            })
        }

        setAge(a) {
            this.setState({
                age: a
            })
        }
    }

```

age = age + 1; // no reconcilliation

only way to update state

Hook useEffect: to have life-cycle methods in functional components

```
// componentDidMount - called only once when component is first time created

useEffect(() => {
    // code
}, []); // empty dependency

// componentDidUpdate --> called whenever a member [state, props ] change

useEffect(() => {
    // code
}, [age]); // called whenever age dependency changes

useEffect(() => {
    // code
}, [name]); // called whenever name dependency changes


useEffect(() => {
    // code
}, [age, name]); // called whenever age or and name dependency changes

```

 npm install bootstrap

 TypeScript using "type" generally in local files, interface can also be used like "type" to define shape of object, generally used for reusability, can alow inherit interface

```
 interface Product {
    "name" :string,
    "price": number
 }

 interface Mobile extends Product {
    "camera": string,
    "connectivity": string
 }

 ```

 hook: useReducer.

 Prefer this hook to manage state instead of useState() when
 1) State is complex
 2) conditionally mutate the state
 3) state mutation depends on previous state

 Example:
 ```
    shopping cart state is
    {
        "items": [
            {"id": 5, "name": "A", price : 891.99, qty: 1, amount: 891.99},
            {"id": 2, "name": "B", price : 50, qty: 4, amount: 200}
        ],
        "total": 1092.00,
        "qty": 2
    }

Conditions:
1) ACTION : ADD_TO_CART
 PAYLOAD: {"id": 8, "name": "D", price:900, qty: 2}
 // amount will be computed in server based on discount coupon, tax, ...

 2) ACTION : INCREMENT
 PAYLOAD: {"id": 5}

 3) ACTION: CHECKOUT
 ```

 Reducer function takes (state, action) returns new state
 Action is an object which contains type and payload
 Simple Counter using useReducer hook

===================================================

React Context:
React follows uni-directional data flow [ props is passed from top to bottom components]
React Context is a feature in React that allows you to pass data through your component tree without having to pass props down manually at every level (a problem known as "prop drilling").

```
Here A and B are children
<LoginComponent>
    <A />
    <B />
</LoginComponent>
Here Hello World and B are children
<LoginComponent>
    Hello World!!!
    <B />
</LoginComponent>
```

Whenever state changes in component, it triggers re-rendering of child components, leads to perfomance issue. can be avoided in class component using shouldComponentUpdate() life-cycle method.
What is the solution for functional components?
Memoization : HOC

===========

Single Page Application [SPA] and Responsive Web design [RWD] using:
1) React bootstrap / MUI / Adobe WebSpecturn / KendoUI/ PrimeReact ..
2) react router dom
3) Context
4) axios [ to make api calls] instead of fetch [default available in browser]

=============

Routers
Client Side: Different URL shows different Views
http://localhost:3000/products
will display ProductList Component
http://localhost:3000/orders
will display Orders Component

Server Side: Different URL different API or Resources 
GET / POST / PUT/ PATCH / DELETE
http://localhost:4000/products
will send products JSON if its GET request
if POST request payload contains new product which has to be added to products collection on Server


Acme    products  cart form

1) ProductList [http://localhost:3000/products]
2) ProductCard 
3) CartList [http://localhost:3000/cart]
4) CartRow 
5) NavbarComponent
6) ProductForm [http://localhost:3000/form]
7) Details [http://localhost:3000/details/3 ]
8) Default [ wrong URL] [http://localhost:3000/dfs]

==========
Step 1) Create a react typescript project
Scaffolding code:
```
npm create vite@latest

shopapp
React
TypeScript
No
Yes
```

Step 2) edit vite.config to change port from 5173 to 3000 and open browser
```
 server: {
        port: 3000,
        open: true
    }
````

Already the project has react and react-dom

shopapp> npm i react-router-dom bootstrap react-bootstrap axios

https://fakestoreapi.com/products?limit=5

=====

Part 2: Cart
Action: ADD_TO_CART, INCREMENT, DECREMENT, CLEAR_CART

Checkout: Place Order --> API call to server, clear cart contents and redirect to landing page.

Since state is complex and conditionally we need to mutate the state --> prefer reducer / useReducer

============

react-router-dom:
1) different routes - show different components
2) lazy loading of components [pending]

Fake RESTful WS
json-server

JSON Server is a lightweight npm package that allows front-end developers to quickly create a mock RESTful API using a single JSON file

npx json-server  --watch data.json --port 1234

sessionStorage.setItem("customer", "jack@gmail.com")

FCP: First Contentful Paint
By default all components will be loaded on to the Browser, this leads to FCP issues.
good Practice: only load required components for intial render, other components can be lazily loaded [ rarely used components]

========================

Form Data:
1) Controlled components
2) Uncontrolled components

=============

Redux: Predicatable State Managment

Ecommerce application:
1) react-router-dom
client side routing
lazy loading of components [lazy, Suspense, fallback]

BrowserRouter, Routes, Route, Link

2) Reducer function - simple JS function (state, action) => returns new state
useReducer() hook is used to dispatch action to reducer function.

3) Context: to avoid props drill
    In this application state managed by useReducer we have placed it into Context, so that consumer can directly access it. Along with that we placed functions like addtoCart, increment and checkout in Context

    useContext() is to Consume Context data / functions

--------

So far hooks covered:
1) useState
2) useEffect - side effects like API calls - component life cycle methods
3) useReducer
4) useContext: Context Consumer
5) useParams(): to read path parameter http://server.com/api/products/4
6) useRef(): to create a reference and attach it to DOM element/ components

General use cases of Context:
1) to avoid props-drill
2) State management for smaller scale application [ like in this example]
Examples:
a) Handling shopping Cart
b) Multi-stage processing of form data

```
    {
        "signUpInfo": {
            "username" : "",
            "password" : ""
        },
        "personalInfo": {
            "firstName": "",
            "lastName": "",
            "dateOfBirth": ""
            
        },
        "professionalInfo": {
            "qualificaiton" : "",
            "experience": "",
            "skills": ""
        }
    }

```

c) MCQ / Feedback forms

=================

REDUX: Predicatable State Management

* Store: place where state resides, Single store per redux application
* Reducers: same as what we have done, (state, action) => new state
* Root Reducer

```
    {
        "cart": {
            "items": [...],
            "total": 2325,
            "qty": 4
        },
        "user": {
            "avatar": "banu.png",
            "name": " Banu Prakash"
        }
    }
```

Small Redux Application. --> Contacts Manager
Action: ADD_CONTACT, REMOVE_CONTACT, CLEAR_CONTACTS

```
npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  redux-example
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/banuprakash/Documents/codes/GITAM/redux-example...
│
◇  Installing dependencies with npm...

```

npm i redux react-redux

Chrome Web Store: Redux Devtools Extension
=====

Why Redux Toolkit instead of Redux?
* Built on top of Redux
* Simple [ store setup, creating reducers, immutable update logic ]
* Opinionated [ assumes max users will use Redux DevTool extension, and hence configures it out of box]
Also for async logic also it configures Thunk out of box.
* Effective: more work with less code
* Support for react redux hooks:
    useSelector() The selector is approximately equivalent to the mapStateToProps argument to connect() conceptually.
    useDispatch() : The selector is approximately equivalent to the mapDispatchToProps argument to connect() conceptually.

Immutable Logic:
https://immerjs.github.io/immer/
https://immutable-js.com/
Autodux

====

Migrating shopapp to use ReduxToolKit instead of Context

```
npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  shopapp-rtk
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/banuprakash/Documents/codes/GITAM/shopapp-rtk...
│
◇  Installing dependencies with npm...

```

shopapp-rtk > npm i @reduxjs/toolkit react-redux
shopapp-rtk > npm i react-router-dom bootstrap react-bootstrap
shopapp-rtk > npm i axios

1) Remove Context and reducers folder
2) remove reference in main.tsx, NavbarComponent, ProductCard, CartList, CartRow

====================

RTK: 

```
counterSlice.js

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) {
      state.value += action.payload
    },
    decrement: (state) {
      state.value--;
    },
    reset: (state) {
        state.value = 0
    }
  },
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer

import counterReducer from './counterSlice';
configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer
  }})

  let dispatch = useDispatch();

  <button type="button" onClick={() = dispatch(increment(5))}>
  <button type="button" onClick={() = dispatch(decrement())}>
  <button type="button" onClick={() = dispatch(reset())}>

{
  cart: {
    items: [],
    quantity: 0,
    total: 0
  },
  profile: {
    avatar: 'banu.png',
    name: 'Banu Prakash'
  }
}

```

https://dev.to/rudragupta_dev/building-a-to-do-app-with-rtk-query-2c0n

=========


REDUX actions are synchronous:
View -> Dispatch action -> store -> root reducer --> reducer -> clones the data -> mutates -> gives it back to store -> store updates the state -> updated state is given to View

Async Redux:
https://redux.js.org/tutorials/fundamentals/part-6-async-logic

Async Redux can be done using middleware: Thunk, Saga

Thunk: subroutine

dispatch(getProducts());

dispatch({type:'FETCH_PRODUCTS'})

dispatch({type:'ADD_TO_CART', payload: {...}})

dispatch({type:'GET_PRODUCTS', products: {...fetched from API}})

{
    products: [{...}, {...}],
    status: "idle",
    error: null
}

https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts

=====

Redux Toolkit: Highly opiniated Library.
It assumes most of the developers uses Thunk as middleware  for async logic.
Hence gives ready functions to use Thunk. Thunk library is installed.

https://redux-toolkit.js.org/api/createAsyncThunk


===========

Complete Recap:
1) JS, ES6 features, NodeJS as platform, Webpack, vite
2) Understanding React Components
a) Class components [ to understand state and life-cycle methods]
b) Functional components 
c) React.createElement()

3) Functional components
Hooks:
a) useState
b) useEffect
c) useReducer
d) useRef

Context: to avoid props-drill -> but can also be used for state managment in smaller and medium sized applications

e) useContext() --> Context consumner
f) React Router dom -> different url should show different components, lazy loading of components
g) useParams() to get Path Parameter from URL

Predicatable State Management: REDUX
REDUX is based on FLUX architecture --> Unidirectional flow of data
even MOBX, ZUSTAND state management libraries are based on Flux architecture

View -> dispatch action -> store -> reducer -> update state

REDUX: 
store -> single source of truth where state resides
Reducer -> function which takes state and action and returns a new state.
Root Reducer -> combines all reducers and used by the store to delegate action and state.
Provider -> expose store to components

react-redux: connect(mapStateToProps, mapDispatchProps)

RTK: Redux Toolkit
simple, opiniated way of using REDUX
1) createSlice
2) createAsyncThunk

useSelector hook - mapStateToProps
useDispatch hook - mapDispatchProps

REDUX DEVTOOLS EXTENSION: time travel debugging
---------------------
