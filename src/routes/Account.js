import React from "react";
import SavedCoin from "../components/SavedCoin";

const Account = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <div className='flex justify-between items-center my-12 py-8 rounded-div'>
        <div className='text-2xl font-bold'>
          <h1>Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button>Sign Out</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Wacht list</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
};

export default Account;
