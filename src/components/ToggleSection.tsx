function ToggleSection() {
  return (
    <div>
      <div className="flex space-x-10 ml-14 text-sm font-medium text-[#3E424A] py-4 ">
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
      <hr className="mx-14"></hr>
    </div>
  );
}

export default ToggleSection;
