import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Auth />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
