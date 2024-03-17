import React, { useState } from 'react';
import Switchsvg from '../../assets/img/icon/Switchsvg.svg'

const Tocrypto = ({cryptoname, cryptoprich, cryptolavel}) => {
  const [isClassAdded, setIsClassAdded] = useState(false);
    // Function to toggle the class
    const toggleClass = () => {
      setIsClassAdded(!isClassAdded);
    };
  return (
    <>
        <li className="list-item d-flex align-items-center gap-2">{cryptoname} <span className="prich">{cryptoprich}</span> <span className="prich text-theme3 cryptolavel">{cryptolavel}</span></li>
    </>
  )
}

export default Tocrypto