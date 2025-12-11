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