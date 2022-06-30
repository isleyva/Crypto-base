import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import {Route, Routes} from 'react-router-dom'
import Home from "./routes/Home";
import Singin from "./routes/Singin";
import Singup from "./routes/Singup";
import Account from "./routes/Account";
import axios from "axios";


function App() {
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
