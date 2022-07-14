import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Savedcoin = () => {
        const [coins, setCoins] = useState([]);
  
    return (
    <div>
        <p>You don't have any coins saved. Please save a coin to add it to your
          watch list.  <Link to="/" >Click here to search for a coin.</Link></p>
    </div>
  )
}

export default Savedcoin