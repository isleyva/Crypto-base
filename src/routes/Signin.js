import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className=" text-2xl font-bold">Sign In</h1>
        <form>
          <div>
            <label>Email</label>
            <div>
              <input type="email" />
              <AiOutlineMail />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="password" />
              <AiFillLock />
            </div>
          </div>
          <button>Sign In</button>
        </form>
        <p>Don`t have an account? <Link to="/signup"> Sign Up  </Link> </p>
      </div>
    </div>
  );
};

export default Signin;
