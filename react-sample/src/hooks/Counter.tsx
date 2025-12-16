import { useReducer } from "react"
import countReducer from "../reducers/countReducer"

export default function Counter() {
 let [state, dispatch] = useReducer(countReducer, {count: 0});

  return (
    <div>
        Counter: {state.count}
        <button type="button" onClick={() => dispatch({type:'INCREMENT', payload: 5})}> + </button>
        <button type="button" onClick={() => dispatch({type:'DECREMENT'})}> - </button>
           <button type="button" onClick={() => dispatch({type:'RESET'})}> RESET </button>
    </div>
  )
}
