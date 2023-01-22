import React, { useState } from "react";

import CoinItem from "./CoinItem";

export default function CoinSearch(props) {
  const [searchText, setSearchText] = useState("");
  console.log("coins in coinsearch", props.coins);
  return (
    <div className="rounded-div">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form action="">
        {/* input with an onchange fucking to run whenever something is typed */}
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full py-3 bg-primary border border-input px-4 rounded-2xl shadow-xl"
            type="text"
            placeholder="Search a Coin"
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr>
            <th></th>
            <th className="px-4">#</th>
            <th className=" text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden md:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {props.coins
            .filter((value) => {//filtering first before mapping
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())//.include for name search
              ) {
                return value;
              }
            })//map function to map the coinsItem component
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
