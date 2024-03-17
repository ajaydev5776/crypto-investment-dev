import Arrow from '../../assets/img/icon/right-arrow.svg'
import Star from '../../assets/img/icon/Star.svg'
import Heighlowcrypto from '../Heighlowcrypto/Heighlowcrypto'

const Heighlowcryptogroup = () => {
  return (
    <>
      <div className="row criptotiming-high g-2">
        <div className="col-md-2">
            <div className="carditem bg-theme1 rounded-1 d-flex justify-content-between gap-3 clickable">
            <div className="leftside d-flex flex-column gap-1">
                <div className="criptoname text-theme2">BTC<span className="text-white-50">/INR</span> <img src={Star} className="ms-2" alt="star" /></div>
                <div className="prich d-flex align-items-center gap-2">₹41,33,600 <span className="text-theme4">-0.67%</span></div>
            </div>
            <div className="rightside"><img src={Arrow} alt="arrow" /></div>
            </div>
        </div>
        <div className="col-md-10">
            <div className="bg-theme1 py3">
            <div className="row gx-0">
                <div className="col">
                    <Heighlowcrypto cryptolavelTime="24h High" cryptoamount="₹41,99,999"/>
                </div>
                <div className="col">
                    <Heighlowcrypto cryptolavelTime="24h Low" cryptoamount="₹41,33,600"/>
                </div>
                <div className="col">
                    <Heighlowcrypto cryptolavelTime="24h Volume (BTC)" cryptoamount="4.25806"/>
                </div>
                <div className="col">
                    <Heighlowcrypto cryptolavelTime="24h Volume (INR)" cryptoamount="₹1,80,03,483.39"/>
                </div>
                <div className="col">
                    <Heighlowcrypto cryptolavelTime="24h High" cryptoamount="₹41,33,600"/>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Heighlowcryptogroup