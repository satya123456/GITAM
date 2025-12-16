import React, { memo } from 'react'

 function NameComponent({name}) {
 console.log("<NameComponent /> renders!!!");
  return (
    <div>In NameComponent: {name}</div>
  )
}

// HOC, built-in
const MemoNameComponent = memo(NameComponent);

export default MemoNameComponent;