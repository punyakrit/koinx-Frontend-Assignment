import { IoMdInformationCircle } from "react-icons/io";

function SentimentSection() {
  return (
    <div className="bg-white h-screen rounded-lg my-5 p-6">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Sentiment</div>
        <div className="flex items-center py-2 mt-2">
          <div className="text-[#44475B] font-semibold text-xl">Key Events</div>
          <div className="">
            <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
          </div>
        </div>
        <div>
            <div className="w-[456px] bg-[#E8F4FD] h-[204px] rounded-xl">
                jdnj
            </div>
        </div>
      </div>
    </div>
  );
}

export default SentimentSection;
