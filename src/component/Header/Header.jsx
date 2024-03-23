import React from 'react'
import Logo from '../../assets/img/logo.svg'
import Contact from '../../assets/img/icon/contact.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <div className="col-12 px-0">
            <nav className="navbar header navbar-expand-lg px-3">
                <Link to="/" className="navbar-brand d-flex"><img src={Logo} className="object-contain h-100" alt="logo"/></Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-3 align-items-center me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page">Spot</a></li>
                        <li className="nav-item"><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
                        <li className="nav-item"><a className="nav-link">Orders</a></li>
                        <li className="nav-item"><a className="nav-link">Wallet & Fees</a></li>
                        <li className="nav-item"><a className="nav-link deposit text-uppercase fw-medium disabled" aria-disabled="true">Crypto Deposit</a></li>
                    </ul>
                    <ul className="navbar-nav gap-3 align-items-center">
                        <li className="nav-item"><a className="nav-link">Contests</a></li>
                        <li className="nav-item"><a className="nav-link">Help Center</a></li>
                        <li className="nav-item"><a className="nav-link"><span><img src={Contact} alt="contact" className="object-contain w-100" /></span></a></li>
                        <li className="nav-item"><a className="text-uppercase fw-medium btn btn-theme2 themebtn">Login / Sign up</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
      )
}

export default Header