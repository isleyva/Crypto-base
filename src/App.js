import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import {Route, Routes} from 'react-router-dom'
import Home from "./routes/Home";
import Singin from "./routes/Singin";
import Singup from "./routes/Singup";
import Account from "./routes/Account";
import axios from "axios";
import { useState } from "react";



function App() {
  const [coins, setCoins] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/singing" element={<Singin />} /> 
      <Route path="/singup" element={<Singup />} /> 
      <Route path="/account" element={<Account />} /> 
      </Routes>
     
    </ThemeProvider>
  );
}

export default App;
