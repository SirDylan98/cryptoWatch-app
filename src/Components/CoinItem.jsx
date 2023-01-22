import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine, SparklinesBars } from "react-sparklines";

export default function CoinItem({ coin }) {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
        <div className="flex items-center">
          <img
            src={coin.image}
            className="w-6 mr-2 rounded-full"
            alt={coin.id}
          />
          {/* hidding certian table columns on small screens */}
          <p className="hidden sm:table-cell">{coin.name}</p>
        </div> 
        </Link>
     
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>R{coin.current_price}</td>
      <td>
    {/* dynamic styling using tenary operators */}
        {coin.price_change_percentage_24h > 0 ? (
        // string manipulation <toFixed(2)// to 2 decimal places>
          <p className="text-green-600"> {coin.price_change_percentage_24h.toFixed(2)}%</p>
        ) : (
          <p className="text-red-600"> {coin.price_change_percentage_24h.toFixed(2)}%</p>
        )}
      </td>
      {/* using string manipulation to put commas on the numbers */}
      <td className="w-[180px] hidden md:table-cell">R{coin.total_volume.toLocaleString()}</td>
      <td className="w-[180px] hidden sm:table-cell">R{coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
}
