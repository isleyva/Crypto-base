import React from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

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
        </form>
      </div>
    </div>
  );
};

export default Signin;
