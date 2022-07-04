import React from "react";
import { useState } from "react";
import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [serachText, setSearchText] = useState("");

  //console.log (coins)
  return (
    <div className="rounded-div my-4 ">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            type="text"
            name="search"
            placeholder="Search for a coin..."
          />
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
          {coins
            .filter((value) => {
              if (serachText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(serachText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
