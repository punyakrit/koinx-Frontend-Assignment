import About from "../components/About"
import CradsPromo from "../components/CradsPromo"
import Crypto from "../components/Crypto"
import PageHolder from "../components/PageHolder"
import PerformanceSection from "../components/PerformanceSection"
import SentimentSection from "../components/SentimentSection"
import ToggleSection from "../components/ToggleSection"
import Tokenomics from "../components/Tokenomics"
import TrendingCoins from "../components/TrendingCoins"
import Team from "../components/TeamCard"
import SuggestionSection from "../components/SuggestionSection"


function CoinPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <PageHolder/>

      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
            <Crypto/>
             <ToggleSection/>
             <PerformanceSection/>
             <SentimentSection/>
             <About/>
             <Tokenomics/>
             <Team/>
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <CradsPromo/>
          <TrendingCoins/>
        </div>
        
      </div>
        <SuggestionSection/>
    </div>
  )
}

export default CoinPage
