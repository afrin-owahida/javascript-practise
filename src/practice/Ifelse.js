import React, { useEffect } from 'react'

function Ifelse() {
  useEffect(()=>{
    var name = "afrin akter";
    if(name = "shoaib"){
      console.log("found")
    }
    else{console.log("not found")}
    // if{}
  },[])
  return (
    <div>Ifelse</div>
  )
}

export default Ifelse