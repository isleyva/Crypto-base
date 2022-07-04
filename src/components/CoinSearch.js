import React from "react";
import { useState } from "react";
import CoinItem from "./CoinItem";


const CoinSearch = ({ coins }) => {
  const [serachText, setSearchText] = useState("");
  
  //console.log (coins)
  return (
    <div className="rounded-div">
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input onChange={(e)=> setSearchText(e.target.value)} type="text" name="search" placeholder="Search for a coin..." />
        </form>
      </div>
      <table>
        <tr>
          <th></th>
          <th>#</th>
          <th>Coin</th>
          <th></th>
          <th>Price</th>
          <th>24h</th>
          <th>24h</th>
          <th>MKT</th>
          <th>Last 7 Days</th>
        </tr>
        <tbody>
          {coins.filter((value) => {
            if (serachText === "") {
              return value;
          } else if (value.name.toLowerCase().includes(serachText.toLowerCase())) {
            return value;
          }
          }).map((coin) => (
            <CoinItem key={coin.id}coin={coin}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
