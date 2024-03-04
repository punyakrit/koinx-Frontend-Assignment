import TradingViewWidget from "./TradingViewWidget";
import img from "../assets/btc.png";
function Crypto() {
  return (
    <div className="  bg-white h-max rounded-md mx-14 my-4 p-4">
      <div className="flex items-center">
        <div>
          <img src={img} className="w-9"></img>
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
            $46,953.04
          </div>
          <div className="text-lg font-medium text-[##0B1426]">₹ 39,42,343</div>
        </div>
        <div className="flex items-center justify-center bg-green-300/20 rounded-lg p-2 h-10 ml-10">
          <svg
            viewBox="0 0 100 100"
            className="w-4 fill-current text-green-600"
          >
            <polygon points="0,100 50,0 100,100" />
          </svg>
          <span className="ml-2 text-sm font-bold">2.51%</span>
        </div>

        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>
      <hr className="mt-8"></hr>
      <div><TradingViewWidget/></div>
    </div>
  );
}

export default Crypto;
