import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'


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
        </form>
      </div>
    </div>
  )
}

export default Signin