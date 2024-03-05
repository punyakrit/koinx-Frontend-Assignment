function PerformanceSection() {
  return (
    <div className="bg-white mt-4 rounded-lg p-6 h-96">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Performance</div>
        <div className="py-2 mt-2">
          <div className="flex justify-between ">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today’s Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                46,930.22
              </div>
            </div>
            <div className="w-[500px] h-2">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
              <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-3 fill-current text-black ml-7"
                >
                  <polygon points="0,100 50,0 100,100" />
                </svg>
                <span className="text-[#44475B] text-sm font-normal">
                  $47,137.83
                </span>
              </div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1 ">
                Today’s High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,343.83
              </div>
            </div>
          </div>
          <div className="flex justify-between  mt-5">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                16,930.22{" "}
              </div>
            </div>
            <div className="w-[500px] h-2">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W High{" "}
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,743.83{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection;
