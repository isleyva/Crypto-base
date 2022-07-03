import React from 'react'

const CoinSearch = ({coins}) => {
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
            {coins.map((coin )=> (
              <tr>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
                <td><img src={coin.image} alt={coin.name} /></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default CoinSearch