// all fields are compulsory
type Employee = {
    name: string,
    email : string,
    phone: string
}

let empl:Employee = {"name": "Raj", "email": "raj@gmail.com", "phone": "3535"};

empl.phone = "988423452"; // valid

// conditional type

type Immutable<T> = {
    readonly [P in keyof T]: T[P];
}

type ImmutableEmployee =  Immutable<Employee>

let emp:ImmutableEmployee = {
        "name": "Raj", 
        "email": "raj@gmail.com", 
        "phone": "3535"
};

// emp.name = "Peter"; // error

type Mobile = {
    "title": string,
    "price": number,
    "manufacturer": string
}

let oppo: Mobile = {"title": "OPPO X Series", "price": 9800.00, "manufacturer": "OPP LTD."};

type Optional<T> = {
    [P in keyof T]?: T[P];
}


type OptOpp = Optional<Mobile>;

let opt: OptOpp = {"title": "OPP MAX"};