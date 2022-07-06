import React, {useState, useEffect} from 'react'
import axios from 'axios'


const CoinPage = () => {
  const [coin, setCoin] = useState({})
   
  const url = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true"
  
  useEffect(() => {
    axios .get(url).then((response) => {
        setCoin(response.data)
       // console.log(response.data)
        }
    )
  }, [url])


  return (
    <div className='rounded-div'>
        <div>
           <img src={coin.image.small} alt="/"/> 
        </div>
    </div>
  )
}

export default CoinPage