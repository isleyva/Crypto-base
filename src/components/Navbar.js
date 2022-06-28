import React from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { AiOutlineMenu } from "react-icons/ai"


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
          {/* Menu icons */}
          <div>
            <AiOutlineMenu className="text-primary text-2xl mr-2" />
           </div>
           {/* Mobile Menu */}
    </div>
  )
}

export default Navbar