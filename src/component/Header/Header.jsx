import React from 'react'
import Logo from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <>
        <div className="col-12 px-0">
            <nav className="navbar header navbar-expand-lg px-3">
                <a className="navbar-brand d-flex" href="index.html"><img src={Logo} className="object-contain h-100" alt="logo"/></a>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-3 align-items-center me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="javascript:;">Spot</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Orders</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Wallet & Fees</a></li>
                        <li className="nav-item"><a className="nav-link deposit text-uppercase fw-medium disabled" aria-disabled="true">Crypto Deposit</a></li>
                    </ul>
                    <ul className="navbar-nav gap-3 align-items-center">
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Contests</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;">Help Center</a></li>
                        <li className="nav-item"><a className="nav-link" href="javascript:;"><span><img src="assets/img/icon/contact.svg" alt="contact" className="object-contain w-100" /></span></a></li>
                        <li className="nav-item"><a className="text-uppercase fw-medium btn btn-theme2 themebtn" href="javascript:;">Login / Sign up</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
      )
}

export default Header