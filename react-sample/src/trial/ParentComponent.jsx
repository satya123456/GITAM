import React, { useState } from 'react'
import NameComponent from './NameComponent';
import AgeComponent from './AgeComponent';

export default function ParentComponent() {
 let [name, setName] = useState("Roger");
 let [age, setAge] = useState(18);
 
  return (
    <div>
        ParentComponent: <br />
        Name: {name} <br />
        Age : {age} <br />
        <NameComponent name={name}/> <br />
        <AgeComponent age ={age} /> <br />
        <button type='button' onClick={() => setAge(age + 1)}>Change Age</button> <br />
        <button type='button' onClick={() => setName(name + "...")}>Change Name</button>
    </div>
  )
}
