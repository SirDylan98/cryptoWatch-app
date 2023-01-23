import React from "react";
import CoinSearch from "../Components/CoinSearch";
import Trending from "../Components/Trending";
import Footer from "../Components/Footer";

export default function Home(props) {
  return (
    <div className="mt-4">
      <CoinSearch coins={props.coins} />
      <Trending/>
     
    </div>
  );
}
