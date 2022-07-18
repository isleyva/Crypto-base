import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Savedcoin = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to="/">Click here to search for a coin.</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div>
                      <img src={coin?.image} alt="/" />
                      <div>
                      <p>{coin?.name}</p>
                      <p>{coin?.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </Link>
                  <td>
                    <AiOutlineClose className="cursor-pointer"/>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Savedcoin;
