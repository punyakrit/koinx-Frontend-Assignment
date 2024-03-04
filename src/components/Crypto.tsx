import  { useState, useEffect } from "react";
import axios from "axios";
import TradingViewWidget from "./TradingViewWidget";
import img from "../assets/btc.png";

interface CryptoData {
  inr: number;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
}

function Crypto(): JSX.Element {
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{
          bitcoin: CryptoData;
        }>(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        setCryptoData(response.data.bitcoin);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white h-max rounded-md mx-14 my-4 p-4">
      <div className="flex items-center">
        <div>
          <img src={img} className="w-9" alt="Bitcoin" />
        </div>
        <div className="text-2xl font-semibold text-[#0B1426] pl-2">Bitcoin</div>
        <div className="text-sm text-[#5D667B] pl-2">BTC</div>
        <div className="bg-[#808A9D] px-3 py-2 text-white rounded-xl ml-7">Rank #1</div>
      </div>
      <div className="mt-8 flex">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">
            {cryptoData && `$${cryptoData.usd}`}
          </div>
          <div className="text-lg font-medium text-[#0B1426]">
            {cryptoData && `₹ ${cryptoData.inr}`}
          </div>
        </div>
        <div className="flex items-center justify-center bg-green-300/20 rounded-lg p-2 h-10 ml-10">
          <svg viewBox="0 0 100 100" className="w-4 fill-current text-green-600">
            <polygon points="0,100 50,0 100,100" />
          </svg>
          <span className="ml-2 text-sm font-bold">
            {cryptoData && `${cryptoData.inr_24h_change.toFixed(2)}%`}
          </span>
        </div>
        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>
      <hr className="mt-8" />
      <div>
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default Crypto;
