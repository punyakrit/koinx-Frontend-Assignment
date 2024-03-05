import CradsPromo from "../components/CradsPromo"
import Crypto from "../components/Crypto"
import PageHolder from "../components/PageHolder"
import ToggleSection from "../components/ToggleSection"

function CoinPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
      <PageHolder/>

      <div className="w-screen flex">
        <div className="w-8/12">
            <Crypto/>
            <ToggleSection/>
            <Crypto/>
        </div>
        <div className="4/12">
          <CradsPromo/>
        </div>
        
      </div>
    </div>
  )
}

export default CoinPage
