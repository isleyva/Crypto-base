import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Savedcoin = () => {
        const [coins, setCoins] = useState([]);
  
    return (
    <div>
        {coins.length === 0 ? (        <p>You don't have any coins saved. Please save a coin to add it to your
          watch list.  <Link to="/" >Click here to search for a coin.</Link></p>) : (
            <table>
                <thead>
                  <tr>
                    <th>Rank #</th>
                    <th>Coin</th>
                    <th>Remove</th>
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
                            <p>{coin?.name}</p>
                            <p>{coin?.symbol.toUpperCase()}</p>
                          </div> 
                        </Link>
                      </td>
                      </tr>
                  ))}
                </tbody>
            </table>
          )}
    </div>
  )
}

export default Savedcoin