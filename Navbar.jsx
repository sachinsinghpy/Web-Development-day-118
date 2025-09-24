import React from 'react'
import { memo } from 'react'

const Navbar = ({adejctive , getAjective}) => {
    console.log("Navbar rendered")
  return (
    <div> 
        I am a {adejctive} Navbar
        <button onClick={()=>{getAjective()}}>Change me {getAjective()}</button>

    </div>
  )
}

export default memo(Navbar)