import React from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { AiOutlineMenu } from "react-icons/ai"


function Navbar() {
  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
        <Link to="/"> 
            <h1 className="text-2xl">Cryptobase</h1>
        </Link>
        <div className="hidden md:block">
        <ThemeToggle/>
        </div>
       <div className="hidden md:block">
        <Link to="/singin" className="p-4 hover:text-accent">Sing In</Link>
       <Link to="/singup" className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl">Sing Up</Link>
        </div> 
          {/* Menu icons */}
          <div>
            <AiOutlineMenu className="text-primary text-2xl mr-2" />
           </div>
           {/* Mobile Menu */}
           <div className="hidden">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <ThemeToggle/>
              </li>
            </ul>
            <div>
            <Link to="/singin">
              <button className="">Sing In</button>
            </Link>
            <Link to="/singup">
              <button className="">Sing Up</button>
            </Link>
            </div>
           </div>
    </div>
  )
}

export default Navbar