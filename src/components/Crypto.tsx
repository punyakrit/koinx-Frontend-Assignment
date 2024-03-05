import { useState, useEffect } from "react";
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
    <div className="bg-white h-max rounded-md ml-14 my-4 p-6">
      <div className="flex items-center">
        <div>
          <img src={img} className="w-9" alt="Bitcoin" />
        </div>
        <div className="text-2xl font-semibold text-[#0B1426] pl-2">
          Bitcoin
        </div>
        <div className="text-sm text-[#5D667B] pl-2">BTC</div>
        <div className="bg-[#808A9D] px-3 py-2 text-white rounded-xl ml-7">
          Rank #1
        </div>
      </div>
      <div className="mt-8 flex">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">
            {(cryptoData && `$${cryptoData.usd}`) || `$66759`}
          </div>
          <div className="text-lg font-medium text-[#0B1426]">
            {(cryptoData && `₹ ${cryptoData.inr}`) || `₹ 5535287`}
          </div>
        </div>
        <div className="flex items-center justify-center bg-green-300/20 rounded-lg p-2 h-10 ml-10">
          <svg
            viewBox="0 0 100 100"
            className="w-4 fill-current text-green-600"
          >
            <polygon points="0,100 50,0 100,100" />
          </svg>
          <span className="ml-2 text-sm font-bold">
            {(cryptoData && `${cryptoData.inr_24h_change.toFixed(2)}%`) ||
              `2.18%`}
          </span>
        </div>
        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>
      <hr className="my-4" />
      <div className="flex mb-4 justify-between">
        <div className="text-lg font-semibold text-[#0B1426]">
          Bitcoin Price Chart (USD)
        </div>
        <div className="flex space-x-5 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
          <div>1H</div>
          <div>24H</div>
          <div className="text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1">
            7D
          </div>
          <div>1M</div>
          <div>3M</div>
          <div>6M</div>
          <div>1Y</div>
          <div>All</div>
        </div>
      </div>
      <div className="h-[400px]">
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default Crypto;
