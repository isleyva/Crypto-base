import React from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"



function Navbar() {
  return (
    <div>
        <Link to="/"> 
            <h1>Cryptobase</h1>
        </Link>
        <div>
        <ThemeToggle/>
        </div>
       <div>
        <Link to="/singin">Sing In</Link>
       <Link to="/singup">Sing Up</Link>
        </div> 
    
    </div>
  )
}

export default Navbar