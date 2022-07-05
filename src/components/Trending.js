import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      console.log(response.data.coins);
    });
  }, []);
  return <div>
    <h1>Trending coins</h1>
      <div>
        {trending.map((coin) => (
            <div>
                <div>
                    <div>
                        <img src={coin.item.small} alt="/" />
                    </div>
                </div>
            </div>
        ))}
      </div>
  </div>;
};

export default Trending;
