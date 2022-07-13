import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";


const Signin = () => {
  return (
    <div>
      <div>
        <h1>Sign In</h1>
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
