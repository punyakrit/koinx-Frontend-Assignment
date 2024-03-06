function ToggleSection() {
  return (
    <div>
      <div className="flex space-x-7 lg:space-x-10 text-sm font-medium text-[#3E424A] py-4 overflow-x-auto">
        <div className="text-[#0141CF] border-[#0052FE] border-b-4 pb-4">
          Overview
        </div>
        <div>Fundamentals</div>
        <div>News Insights</div>
        <div>Sentiments</div>
        <div>Team</div>
        <div>Technicals</div>
        <div>Tokenomics</div>
      </div>
      <hr className=""></hr>
    </div>
  );
}

export default ToggleSection;
