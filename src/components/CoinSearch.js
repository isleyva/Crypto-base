import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import {Sparklines, SparklinesLine} from "react-sparklines";


const CoinSearch = ({ coins }) => {
  //console.log (coins)
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" name="search" placeholder="Search for a coin..." />
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
          {coins.map((coin) => (
            <tr>
              <td>
                <AiOutlineStar />
              </td>
              <td>
                {coin.market_cap_rank}
              </td>
              <td>
                <div>
                  <img src={coin.image} alt={coin.name} />
                  <p>{coin.name}</p>
                </div>
              </td>
              <td>
                {coin.symbol}
              </td>
              <td>
                {coin.current_price}
              </td>
              <td>
                {coin.price_change_percentaje_24h}
              </td>
              <td>
               {coin.total_volume}
              </td>
              <td>
                {coin.market_cap}
              </td>
              <td>
               <Sparklines  data={coin.sparkline_in_7d.price}>
                <SparklinesLine color="teal" />
               </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
