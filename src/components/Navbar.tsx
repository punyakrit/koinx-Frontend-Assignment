import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="h-20 flex items-center justify-between shadow-[#1026490F]/10 fixed shadow-md bg-[#FFFFFF]  w-screen">
      <div>
        <img src={logo} alt="Logo" className="w-24 h-6 ml-14"></img>
      </div>
      <div className="flex items-center">
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Crypto Taxes
        </div>
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Free Tools{" "}
        </div>
        <div className="text-lg font-semibold text-[#0F1629] mr-6">
          Resource Center{" "}
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-14">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
