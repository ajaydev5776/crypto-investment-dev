import React from 'react'

function Wallet() {
  return (
    <>
        <div className="container-fluid walletSection py-4 mt-3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <ul className="nav nav-tabs navTabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active navLink" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Wallet</button>
                        </li>
                    </ul>
                    <div className="tab-content tabContent" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <div className="contentBody">
                                <div className="bg-theme1 py-3">
                                    <div className="row gx-0 row-gap-3">
                                        <div className="col-6 col-md">
                                            <div className="carditem miditems">
                                                <div className="leftside px-sm-3 d-flex flex-column gap-sm-2 gap-1">
                                                    <div className="criptoname">Total Balance</div>
                                                    <div className="prich d-flex align-items-center gap-2">₹5457.00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md">
                                            <div className="carditem miditems">
                                                <div className="leftside px-sm-3 d-flex flex-column gap-sm-2 gap-1 border0 border-md-end">
                                                    <div className="criptoname">
                                                        Available Balance
                                                        <a href="javascript:;">
                                                            <img src="assets/img/icon/question-mark.svg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="prich d-flex align-items-center gap-2">₹5457.00 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md">
                                            <div className="carditem miditems">
                                                <div className="leftside px-sm-3 d-flex flex-column gap-sm-2 gap-1">
                                                    <div className="criptoname">
                                                        Locked Balance
                                                        <a href="javascript:;">
                                                            <img src="assets/img/icon/question-mark.svg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="prich d-flex align-items-center gap-2">₹5457.00 </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md">
                                            <div className="carditem miditems">
                                                <div className="leftside px-sm-3 d-flex flex-column gap-sm-2 gap-1 border-0">
                                                    <div className="criptoname">
                                                        TDS Paid
                                                        <a href="javascript:;">
                                                            <img src="assets/img/icon/question-mark.svg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="prich d-flex align-items-center gap-2"> 
                                                        ₹5457.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pnlDiv">
                                    <div className="row align-items-center row-gap-2">
                                        <div className="col">
                                            <div className="pnltxt">
                                                Your Tax P&L statement is available. Kindly click to download.
                                            </div>
                                        </div>
                                        <div className="col-sm-auto">
                                            <div className="mainCArd position-relative">
                                                <a href="javascript:;" className="stretched-link"></a>
                                                <div className="row align-items-center gx-2">
                                                    <div className="col-auto">
                                                        <div className="pnlimg">
                                                            <img src="./assets/img/pnlimg.svg" alt="pnlImg" className="h-100 w-100" />
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="txt">
                                                            P&L Report
                                                        </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <div className="arrowimg">
                                                            <img src="./assets/img/right-arrow.svg" alt="pnlImg" className="h-100 w-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="walletTable table-responsive">
                                <table className="table align-middle m-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">INR Amount</th>
                                            <th scope="col">Date & Time</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="coinImg d-flex">
                                                        <img src="./assets/img/doge.png" alt="" className="h-100 w-100" />
                                                    </span>
                                                    <span className="coinName">
                                                        Doge <span className="bracket">(doge)</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>1234567</td>
                                            <td>25 March 24 <span className="ms-3">11:38:28</span></td>
                                            <td><span className="text-theme3">INR Deposited</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="coinImg d-flex">
                                                        <img src="./assets/img/doge.png" alt="" className="h-100 w-100" />
                                                    </span>
                                                    <span className="coinName">
                                                        Doge <span className="bracket">(doge)</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>1234567</td>
                                            <td>25 March 24 <span className="ms-3">11:38:28</span></td>
                                            <td><span className="text-theme4">INR Withdrawn</span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="coinImg d-flex">
                                                        <img src="./assets/img/doge.png" alt="" className="h-100 w-100" />
                                                    </span>
                                                    <span className="coinName">
                                                        Doge <span className="bracket">(doge)</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>1234567</td>
                                            <td>25 March 24 <span className="ms-3">11:38:28</span></td>
                                            <td><span className="text-theme3">INR Deposited</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">
                                                <div className="mainCard d-flex align-items-center justify-content-center flex-column">
                                                    <div className="imgDiv">
                                                        <img src="assets/img/no-data.svg" alt="" />
                                                    </div>
                                                    <div className="heading">
                                                        Nothing here to see.
                                                    </div>
                                                    <div className="subHEad">
                                                        Deposit and start trading now
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Wallet