import { faker } from "@faker-js/faker";
import { useState } from "react"


export default function StateComp() {
  let [age, updateAge] = useState<number>(18);
  let [name, setName] = useState<string>("Roger");

  return (
    <div>
      Name : {name} <br />
      Age : {age} <br />
      <button type="button" onClick={() => updateAge(age + 1)}>Change Age</button> <br />
      <button type="button" onClick={() => setName(faker.person.firstName())}>Change Name</button>
    </div>
  )
}


// export default function StateComp() {
//   let [age, setAge] = useState(18);
//   let [name, setName] = useState("Roger");

//   return (
//     <div>
//       Name : {name} <br />
//       Age : {age} <br />
//       <button type="button" onClick={() => setAge(age + 1)}>Change Age</button> <br />
//       <button type="button" onClick={() => setName(faker.person.firstName())}>Change Name</button>
//     </div>
//   )
// }
