import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import {Sparklines, SparklinesLine} from "react-sparklines";

const CoinItem = ({coin}) => {
  return (
    <tr className='h-[80px] border-b overflow-hidden'>
              <td>
                <AiOutlineStar />
              </td>
              <td>
                {coin.market_cap_rank}
              </td>
              <td>
                <div className='flex items-center'>
                  <img className="w-6 mr-2 rounded-full" src={coin.image} alt={coin.name} />
                  <p className="hidden sm:table-cell">{coin.name}</p>
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
  )
}

export default CoinItem