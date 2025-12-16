import React, { memo } from 'react'

function AgeComponent({age}) {
  console.log("<AgeComponent /> renders!!!")
  return (
    <div>AgeComponent: {age}</div>
  )
}


export default memo(AgeComponent);