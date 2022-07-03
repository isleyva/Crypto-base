import React from 'react'
import CoinSearch from '../components/CoinSearch'


const Home = (props) => {
 // console.log(coins) for debugging
  return (
    <div>
        <CoinSearch coins={props.coins} />
    </div>
  )
}

export default Home