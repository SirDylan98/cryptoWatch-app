import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "./Context/ThemeContext";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import CoinPage from "./Pages/CoinPage";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  const [coins, setCoins] = useState([]);// setting the state of the coins to an empty array
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar&order=market_cap_desc&per_page=10&page=1&sparkline=true";
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data);
    });
  }, [url]); // setting the dependency array to have url so that whenever the value of url changes use effect is fired
  return (
    // Surrounding the whole app with the Theme Provider context so that we can use our context anywhere in the app | Cross cutting Concerns
    <ThemeProvider>
      <AuthContextProvider>

      <NavBar />
      {/* Routes from react router dom */}
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinPage/>}>
          <Route path=":coinId" />
        </Route>
      </Routes>
      <Footer/>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
