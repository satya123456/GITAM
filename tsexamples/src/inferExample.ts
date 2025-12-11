
// (a > b)? a: b
// R is the new type infer from a function return value
type ResultTypeOf<T> = T extends (...args:any[]) => infer R ? R : never

function somerTask(name:string, age: number) {
    // return Object literal
    return {
        name,
        age: age,
        // employed: false
    }
}

type SomeTaskResultType = ResultTypeOf<typeof somerTask>

let results: SomeTaskResultType = somerTask("Roger", 45);

type PromiseType = ResultTypeOf<typeof fetch>
let users: PromiseType = fetch("");

/////////////////////////////////

// Extracting the First Argument of a function

type FirstArgType<T> = T extends (first:infer U, ...args:any[]) => any ? U :never;


type T = FirstArgType<typeof task>;

type FetchFirstArg = FirstArgType<typeof fetch>


// Extracting the Second Argument of a function

type SecondArgType<T> = T extends (first:any, second: infer U, ...args:any[]) => any ? U :never;

type T1 = SecondArgType<typeof task>;

type FetchSecondArg = SecondArgType<typeof fetch>

// Extracting Parameters
function task(name:string, age: number, email: string, address :string) {

}
type MyParam<T> = T extends (...args: infer P) => any ? P : never;

type params = MyParam<typeof task>

const dataParam: params = ['Tim', 21, "a@g.com", "M G ROAD"];