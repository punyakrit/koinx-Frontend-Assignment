import Crypto from "../components/Crypto"
import PageHolder from "../components/PageHolder"

function CoinPage() {
  return (
    <div className="h-screen w-screen bg-slate-200/40">
      <PageHolder/>

      <div>
        <div>
            <Crypto/>
        </div>
        
      </div>
    </div>
  )
}

export default CoinPage
