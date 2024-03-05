import Crypto from "../components/Crypto"
import PageHolder from "../components/PageHolder"

function CoinPage() {
  return (
    <div className="h-screen w-screen bg-slate-200/40">
      <PageHolder/>

      <div className="w-screen">
        <div className="w-8/12">
            <Crypto/>
        </div>
        
      </div>
    </div>
  )
}

export default CoinPage
