import React, { useState } from 'react';
import Switchsvg from '../../assets/img/icon/Switchsvg.svg'
import Tocrypto from '../Tocrypto/Tocrypto';

const Topbar = () => {
  const [isClassAdded, setIsClassAdded] = useState(false);
    // Function to toggle the class
    const toggleClass = () => {
      setIsClassAdded(!isClassAdded);
    };

  return (
    <>
     <div className={`trendingcripto bg-theme1 d-flex align-items-center gap-3 ${isClassAdded ? 'losers-cripto' : ''}`}>
          <button className="criptoFilter shadow-none border-0 rounded-1 text-white" onClick={toggleClass}><span className="contant text-nowrap">{isClassAdded ? 'top losers' : 'top gainers'}</span><img src={Switchsvg} alt="Switchsvg" /></button>
          <ul className="trendingcripto-list gap-3 m-0 p-0 align-items-center px-2 topcripto">
            <Tocrypto cryptoname="POWR/INR" cryptoprich="₹33.524" cryptolavel="+21.90%"/>
            <Tocrypto cryptoname= "UMA/INR" cryptoprich= "₹83.24"  cryptolavel="+51.90%"/>
            <Tocrypto cryptoname= "IMX/INR" cryptoprich= "₹58.54"  cryptolavel="+52.70%"/>
            <Tocrypto cryptoname= "BCH/INR" cryptoprich= "₹43.67"  cryptolavel="+41.60%"/>
            <Tocrypto cryptoname= "POLYX/INR" cryptoprich= "₹55.504"  cryptolavel="+84.32%"/>
            <Tocrypto cryptoname= "POWR/INR" cryptoprich= "₹33.524"  cryptolavel="+21.90%"/>
            <Tocrypto cryptoname= "UMA/INR" cryptoprich= "₹83.24 " cryptolavel="+51.90%"/>
            <Tocrypto cryptoname= "IMX/INR" cryptoprich= "₹58.54"  cryptolavel="+52.70%"/>
            <Tocrypto cryptoname= "BCH/INR" cryptoprich= "₹43.67"  cryptolavel="+41.60%"/>
            <Tocrypto cryptoname= "POLYX/INR" cryptoprich= "₹55.504"  cryptolavel="+84.32%"/>
          </ul>
          <ul className="trendingcripto-list gap-3 m-0 p-0 align-items-center px-2 losercripto">
              <Tocrypto cryptoname= "REQ/INR " cryptoprich= "₹9.943"  cryptolavel="-10.90%"/>
              <Tocrypto cryptoname= "BONK/INR " cryptoprich= "53.524"  cryptolavel="-5.50%"/>
              <Tocrypto cryptoname= "JTO/INR  " cryptoprich= "₹35.14"  cryptolavel="-20.90%"/>
              <Tocrypto cryptoname= "ICP/INR " cryptoprich= "₹18.524"  cryptolavel="-18.90%"/>
            <li className="list-item d-flex align-items-center gap-2">BONK/INR <span className="prich">₹53.524</span> <span className="prich text-theme4">-5.50%</span></li>
          </ul>
      </div>
    </>
  )
}

export default Topbar