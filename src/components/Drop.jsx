import React, { useCallback, useState } from 'react'
import "./Drop.css"
const Drop = ({onDrop}) => {
    const[showDrop,setshowDrop]=useState(false)
  return (
    <section    
     onDragEnter={()=>setshowDrop(true)}
     onDragLeave={()=>setshowDrop(false)}
     onDrop={()=>{onDrop();
        setshowDrop(false)

     }}
     onDragOver={(e)=>e.preventDefault()}
     className={showDrop ? "drop" : "hide_drop"}>drop here
         </section>
  )
}

export default Drop