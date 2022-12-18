import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
import Account from "./Components/Account/Account";
import { AuthContextProvider } from "./Context/AuthContext";
import Protected from "./Components/Protected/Protected";
import Favourite from "./Components/Favourites/Favourite";
import Posts from "./Components/Posts/Posts";
const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />

          <Route path="/fav" element={<Favourite />} />
          <Route path="/posts/*" element={<Posts />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
