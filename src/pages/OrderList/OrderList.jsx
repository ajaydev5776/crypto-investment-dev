import React from 'react'
import OrderHistrpry from '../../assets/img/History.svg'
import Referce from '../../assets/img/refresh.svg'

const OrderList = () => {
    return (
        <>
        <div class="container-fluid portfolioSection py-4">
            <div class="container">
                <div class="header px-3 mb-3 rounded">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-auto">
                            <div class="row py-3 align-items-center">
                                <div class="col-auto"><div className="titleImg"><img src={OrderHistrpry} alt="shap" /></div></div>
                                <div class="col px-0">
                                    <div class="heading fw-bold">Order History</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="refreshBtn">
                                <a class="text-uppercase fw-medium btn btn-theme2 text-white themebtn refreshBtnBtn d-flex align-items-center gap-1" href="javascript:;">
                                    Refresh
                                    <span class="refreshSvg d-flex"><img src={Referce} alt="Refresh" /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="contentBody">
                    <div class="bg-theme1 py-3 portfolioWallet">
                        <WalletCardItems data={data} />
                    </div>
                </div>
                <div class="table-responsive mt-3">
                    <PortfolioTable/>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default OrderList