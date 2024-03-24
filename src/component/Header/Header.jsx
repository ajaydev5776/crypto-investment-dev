import React ,{ useState } from 'react'
import Logo from '../../assets/img/logo.svg'
import Contact from '../../assets/img/icon/contact.svg'
import { Link, NavLink } from 'react-router-dom'

import Login from '../Modals/Login';
import Ragister from '../Modals/Ragister';
import Otp from '../Modals/Otp';


const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);

    const handleLoginModalOpen = () => {
        setShowLoginModal(true);
        setShowSecondModal(false);
    };
    const handleSecondModalOpen = () => {
        setShowSecondModal(true);
        setShowLoginModal(false);
    };
    const handleOtpModalOpen = () => {
        setShowOtpModal(true);
        setShowLoginModal(false);
        setShowSecondModal(false);
    };

    const handleCloseLoginModal = () => {
        setShowLoginModal(false);
    };
    const handleCloseSecondModal = () => {
        setShowSecondModal(false);
    };
    const handleCloseOtpModal = () => {
        setShowOtpModal(false);
    };

    return (
        <>
        <div className="col-12 px-0 sticky-top mb-2">
            <nav className="navbar header navbar-expand-lg px-3">
                <Link to="/" className="navbar-brand d-flex"><img src={Logo} className="object-contain h-100" alt="logo"/></Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-3 align-items-center me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink to="" className="nav-link">Spot</NavLink></li>
                        <li className="nav-item"><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
                        <li className="nav-item"><NavLink to="/order" className="nav-link">Orders</NavLink></li>
                        <li className="nav-item"><NavLink to="/wallet" className="nav-link">Wallet & Fees</NavLink></li>
                        <li className="nav-item"><NavLink to="#" className="nav-link deposit text-uppercase fw-medium disabled text-white">Crypto Deposit</NavLink></li>
                    </ul>
                    <ul className="navbar-nav gap-3 align-items-center">
                        <li className="nav-item"><NavLink to="/refer" className="nav-link">Refer & Earn</NavLink></li>
                        <li className="nav-item"><NavLink to="#" className="nav-link">Help Center</NavLink></li>
                        <li className="nav-item"><NavLink to="#" className="nav-link"><span><img src={Contact} alt="contact" className="object-contain w-100" /></span></NavLink></li>
                        <li className="nav-item"><NavLink to="#" onClick={handleLoginModalOpen} className="text-uppercase fw-medium btn btn-theme2 themebtn text-white">Login / Sign up</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
        {/* Login Modal */}
        <Login show={showLoginModal} handleClose={handleCloseLoginModal} handleSecondModalOpen={handleSecondModalOpen} />
            
        {/* Second Modal */}
        <Ragister show={showSecondModal} handleClose={handleCloseSecondModal} handleLoginModalOpen={handleLoginModalOpen} />

        {/* Second Modal */}
        <Otp show={showOtpModal} handleClose={handleCloseOtpModal} handleOtpModalOpen={handleOtpModalOpen} />
        </>
    )
}

export default Header