import React from 'react'
import { useState } from 'react'
import "./assets/style/index.scss"


function Mycomponent() {
      const [ Name, setName] = useState("Mirjalol");
  
  const updatename = () =>{
    setName("Otaboy")
  }
    return (
      <>
      <div className='changed'>
        <h1> My name:{Name} </h1>
        <button onClick={updatename} >  Change name</button>
      </div>
    </>
  )
}

export default Mycomponent